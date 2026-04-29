"""Load Connections puzzles from a private JSON corpus into ConnectionsGame.

The JSON file (e.g. data/games.json) is private. This loader is public —
it reads the file at runtime; it does not embed any puzzle content.
"""

from __future__ import annotations

import json
from pathlib import Path

from .game import ConnectionsGame, Difficulty, Group

DEFAULT_GAMES_PATH = Path("data/games.json")

_DIFFICULTY_BY_COLOR = {
    "yellow": Difficulty.YELLOW,
    "green": Difficulty.GREEN,
    "blue": Difficulty.BLUE,
    "purple": Difficulty.PURPLE,
}


def _build_game(spec: dict, **kwargs) -> ConnectionsGame:
    groups = tuple(
        Group(
            category=block["title"],
            words=frozenset(w.strip().upper() for w in block["words"]),
            difficulty=_DIFFICULTY_BY_COLOR[color],
        )
        for color, block in spec["categories"].items()
    )
    return ConnectionsGame(groups=groups, puzzle_id=spec["id"], **kwargs)


def load_games(path: str | Path = DEFAULT_GAMES_PATH, **game_kwargs) -> list[ConnectionsGame]:
    with Path(path).open() as f:
        payload = json.load(f)
    return [_build_game(spec, **game_kwargs) for spec in payload["games"]]


def load_game(game_id: str, path: str | Path = DEFAULT_GAMES_PATH, **game_kwargs) -> ConnectionsGame:
    for game in load_games(path, **game_kwargs):
        if game.puzzle_id == game_id:
            return game
    raise KeyError(f"No puzzle with id={game_id!r} in {path}")
