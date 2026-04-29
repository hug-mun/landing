"""Export, save, and summarize ConnectionsGame outcomes.

A run produces a single JSON record per (method, puzzle). That JSON is the
unit of analysis downstream — never analyze from prints.
"""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

from .game import ConnectionsGame, GuessResult


def count_repeated(history: list[dict]) -> int:
    return sum(1 for f in history if f["result"] == GuessResult.REPEATED.value)


def export_result(
    game: ConnectionsGame,
    method: str,
    puzzle_id: str,
    *,
    agent_view: dict | None = None,
) -> dict:
    """Build a result dict.

    `agent_view` should be `{"seed": int, "words": [...]}` — the exact input
    shown to the agent. Recording it lets you reproduce a run later.
    """
    history = [
        {
            "guess": sorted(f.guess),
            "result": f.result.value,
            "overlap_max": f.overlap_max,
        }
        for f in game.history
    ]
    result = {
        "puzzle_id": puzzle_id,
        "method": method,
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "is_won": game.is_won,
        "correct_groups": len(game.solved_groups),
        "mistakes": game.mistakes,
        "invalid_count": game.invalid_count,
        "repeated_errors": count_repeated(history),
        "history": history,
    }
    if agent_view is not None:
        result["agent_view"] = agent_view
    return result


def save_result(result: dict, results_dir: Path | str = "results") -> Path:
    """Write a result JSON to disk.

    `results/` is public — only synthetic demo outputs and aggregate summaries
    belong there. Per-run JSONs from real (e.g. NYT-sourced) puzzles must be
    saved to `runs/` or the private repo, not here.
    """
    out_dir = Path(results_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    path = out_dir / f"{result['method']}_{result['puzzle_id']}.json"
    with path.open("w") as f:
        json.dump(result, f, indent=2)
    return path


def print_summary(result: dict) -> None:
    print(f"\n=== {result['method']} | {result['puzzle_id']} ===")
    print(f"Solved: {result['is_won']}")
    print(f"Correct groups: {result['correct_groups']}/4")
    print(f"Mistakes: {result['mistakes']}")
    print(f"Invalid: {result['invalid_count']}")
    print(f"Repeated: {result['repeated_errors']}")
