"""Gera gpt-index.json com os PNGs de looks em gpt/."""
import json
from pathlib import Path

ROOT = Path(__file__).parent
files = sorted(p.name for p in (ROOT / "gpt").glob("camisa-*-calca-*-calcado-*.png"))
(ROOT / "gpt-index.json").write_text(json.dumps(files, ensure_ascii=False), encoding="utf-8")
print(f"{len(files)} looks")
