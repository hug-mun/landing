"""Connections puzzle environment.

NYT Connections: 16 words → 4 hidden groups of 4. Each group has a category
and a difficulty color (yellow/green/blue/purple). Up to 4 wrong guesses
allowed. A guess with exactly 3 of 4 words from a single group can return
"one away" (configurable per experiment).

Agents interact via `guess()` and read `state()`. Strategy lives elsewhere.
"""

from __future__ import annotations

import random
from dataclasses import dataclass, field
from enum import Enum
from typing import Iterable


class Difficulty(str, Enum):
    YELLOW = "yellow"
    GREEN = "green"
    BLUE = "blue"
    PURPLE = "purple"


class GuessResult(str, Enum):
    CORRECT = "correct"
    ONE_AWAY = "one_away"
    INCORRECT = "incorrect"
    REPEATED = "repeated"
    INVALID = "invalid"


@dataclass(frozen=True)
class Group:
    category: str
    words: frozenset[str]
    difficulty: Difficulty

    def __post_init__(self):
        if len(self.words) != 4:
            raise ValueError(f"Group must have 4 words, got {len(self.words)}")


@dataclass
class GuessFeedback:
    result: GuessResult
    guess: frozenset[str]
    overlap_max: int = 0
    matched_group: Group | None = None
    message: str = ""


@dataclass
class ConnectionsGame:
    groups: tuple[Group, ...]
    max_mistakes: int = 4
    one_away_feedback: bool = True
    count_invalid_as_mistake: bool = False
    count_repeated_as_mistake: bool = False
    _solved: list[Group] = field(default_factory=list)
    _mistakes: int = 0
    _history: list[GuessFeedback] = field(default_factory=list)

    def __post_init__(self):
        if len(self.groups) != 4:
            raise ValueError("Connections requires exactly 4 groups")
        all_words = [w for g in self.groups for w in g.words]
        if len(all_words) != 16 or len(set(all_words)) != 16:
            raise ValueError("Groups must contain 16 unique words total")

    @property
    def all_words(self) -> frozenset[str]:
        return frozenset(w for g in self.groups for w in g.words)

    @property
    def remaining_words(self) -> frozenset[str]:
        solved = {w for g in self._solved for w in g.words}
        return self.all_words - solved

    @property
    def solved_groups(self) -> tuple[Group, ...]:
        return tuple(self._solved)

    @property
    def mistakes(self) -> int:
        return self._mistakes

    @property
    def mistakes_remaining(self) -> int:
        return self.max_mistakes - self._mistakes

    @property
    def invalid_count(self) -> int:
        return sum(1 for f in self._history if f.result is GuessResult.INVALID)

    @property
    def repeated_count(self) -> int:
        return sum(1 for f in self._history if f.result is GuessResult.REPEATED)

    @property
    def history(self) -> tuple[GuessFeedback, ...]:
        return tuple(self._history)

    @property
    def is_won(self) -> bool:
        return len(self._solved) == 4

    @property
    def is_lost(self) -> bool:
        return self._mistakes >= self.max_mistakes

    @property
    def is_over(self) -> bool:
        return self.is_won or self.is_lost

    def guess(self, words: Iterable[str]) -> GuessFeedback:
        if self.is_over:
            raise RuntimeError("Game is over")

        guess_set = frozenset(w.strip().upper() for w in words)

        if len(guess_set) != 4:
            if self.count_invalid_as_mistake:
                self._mistakes += 1
            return self._record(GuessFeedback(
                result=GuessResult.INVALID,
                guess=guess_set,
                message=f"Guess must have 4 unique words, got {len(guess_set)}",
            ))
        if not guess_set.issubset(self.remaining_words):
            extra = guess_set - self.remaining_words
            if self.count_invalid_as_mistake:
                self._mistakes += 1
            return self._record(GuessFeedback(
                result=GuessResult.INVALID,
                guess=guess_set,
                message=f"Words not available: {sorted(extra)}",
            ))

        prior_validated = (f.guess for f in self._history
                           if f.result is not GuessResult.INVALID)
        if guess_set in prior_validated:
            if self.count_repeated_as_mistake:
                self._mistakes += 1
            return self._record(GuessFeedback(
                result=GuessResult.REPEATED,
                guess=guess_set,
                message="Repeated guess",
            ))

        unsolved = [g for g in self.groups if g not in self._solved]

        for group in unsolved:
            if guess_set == group.words:
                self._solved.append(group)
                return self._record(GuessFeedback(
                    result=GuessResult.CORRECT,
                    guess=guess_set,
                    overlap_max=4,
                    matched_group=group,
                    message=f"Correct: {group.category} ({group.difficulty.value})",
                ))

        overlap_max = max(len(guess_set & g.words) for g in unsolved)
        self._mistakes += 1
        if overlap_max == 3 and self.one_away_feedback:
            return self._record(GuessFeedback(
                result=GuessResult.ONE_AWAY,
                guess=guess_set,
                overlap_max=3,
                message="One away",
            ))
        return self._record(GuessFeedback(
            result=GuessResult.INCORRECT,
            guess=guess_set,
            overlap_max=overlap_max,
            message="Incorrect",
        ))

    def _record(self, feedback: GuessFeedback) -> GuessFeedback:
        self._history.append(feedback)
        return feedback

    def state(self) -> dict:
        return {
            "remaining_words": sorted(self.remaining_words),
            "solved_groups": [
                {
                    "category": g.category,
                    "words": sorted(g.words),
                    "difficulty": g.difficulty.value,
                }
                for g in self._solved
            ],
            "mistakes": self._mistakes,
            "mistakes_remaining": self.mistakes_remaining,
            "invalid_count": self.invalid_count,
            "repeated_count": self.repeated_count,
            "guess_history": [
                {
                    "guess": sorted(f.guess),
                    "result": f.result.value,
                    "overlap_max": f.overlap_max,
                }
                for f in self._history
            ],
            "is_won": self.is_won,
            "is_lost": self.is_lost,
        }

    def shuffled_words(self, seed: int | None = None) -> list[str]:
        rng = random.Random(seed)
        words = list(self.all_words)
        rng.shuffle(words)
        return words


# DEMO PUZZLE — synthetic, public-safe content for smoke tests only.
# Made-up generic English with verified categories; not from NYT or any
# third-party puzzle source. Real eval puzzles live in the private repo.
DEMO_PUZZLE_GROUPS = (
    Group(
        category="Fruits",
        words=frozenset({"APPLE", "BANANA", "CHERRY", "GRAPE"}),
        difficulty=Difficulty.YELLOW,
    ),
    Group(
        category="Planets",
        words=frozenset({"MARS", "VENUS", "JUPITER", "SATURN"}),
        difficulty=Difficulty.GREEN,
    ),
    Group(
        category="Card suits",
        words=frozenset({"SPADE", "HEART", "CLUB", "DIAMOND"}),
        difficulty=Difficulty.BLUE,
    ),
    Group(
        category="Greek letters",
        words=frozenset({"ALPHA", "BETA", "GAMMA", "DELTA"}),
        difficulty=Difficulty.PURPLE,
    ),
)


def demo_puzzle(**kwargs) -> ConnectionsGame:
    """Return a demo game. Not for evaluation — see DEMO_PUZZLE_GROUPS warning."""
    return ConnectionsGame(groups=DEMO_PUZZLE_GROUPS, **kwargs)
