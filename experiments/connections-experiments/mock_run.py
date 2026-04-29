"""Mock run: scripted guesses on a real puzzle, no LLM involved.

Demonstrates the full data flow:
    load_game -> agent_view (16 shuffled words) -> guess loop -> save result.

Run from the connections-experiments directory:
    python mock_run.py

Output is saved to runs/ (gitignored — real puzzle data is private).
"""

from src.data import load_game
from src.results import export_result, print_summary, save_result

PUZZLE_ID = "g1"
SEED = 42
METHOD = "mock"
DEBUG = False  # set True to print the internal answer key (never in real runs)

# Scripted attempts — what a deterministic "agent" might try.
ATTEMPTS = [
    (["DRY", "FOLD", "FLOWER", "SCREEN"], "wrong: 2 laundry + 2 sun"),
    (["CALL", "MATCH", "STAMP", "COUPON"], "one-away: 3 books + CALL"),
    (["CHECK", "MATCH", "STAMP", "COUPON"], "books"),
    (["APPEAL", "BID", "CALL", "REQUEST"], "entreaty"),
    (["DRY", "FOLD", "SORT", "WASH"], "laundry verbs"),
    (["DIAL", "FLOWER", "SCREEN", "TAN"], "sun___"),
]


def main() -> None:
    game = load_game(PUZZLE_ID)

    print(f"=== puzzle {game.puzzle_id} | mistakes allowed: {game.max_mistakes} ===")

    if DEBUG:
        print("\n[DEBUG] Internal answer key:")
        for g in game.groups:
            print(f"  [{g.difficulty.value:6}] {g.category!r} -> {sorted(g.words)}")

    view = game.agent_view(seed=SEED)
    print(f"\n--- AGENT VIEW (seed={SEED}) ---")
    print(f"  keys: {list(view.keys())}")
    print(f"  puzzle_id: {view['puzzle_id']}")
    print(f"  words ({len(view['words'])}): {view['words']}")

    print(f"\n--- INTERACTION ---")
    for words, intent in ATTEMPTS:
        fb = game.guess(words)
        print(f"  guess {sorted(words)}  ({intent})")
        print(f"    -> {fb.result.value:9} | overlap={fb.overlap_max} | {fb.message}")
        print(f"    state: solved {len(game.solved_groups)}/4 | mistakes {game.mistakes}/{game.max_mistakes} | remaining {len(game.remaining_words)}")
        if game.is_over:
            break

    result = export_result(
        game,
        method=METHOD,
        puzzle_id=game.puzzle_id,
        agent_view={"seed": SEED, "words": view["words"]},
    )
    # runs/ is gitignored — correct destination for real-puzzle outputs.
    path = save_result(result, results_dir="runs")

    print(f"\n--- RESULT ---")
    print_summary(result)
    print(f"\nSaved: {path}")


if __name__ == "__main__":
    main()
