"""Gera gpt-index.json com as imagens de combinações disponíveis em gpt/."""
import json
from pathlib import Path

ROOT = Path(__file__).parent
patterns = (
    "camisa-*-calca-*-calcado-*.png",
    "terno-*-camisa-*-calca-*-calcado-*.png",
)
files = sorted({p.name for pattern in patterns for p in (ROOT / "gpt").glob(pattern)})
(ROOT / "gpt-index.json").write_text(json.dumps(files, ensure_ascii=False), encoding="utf-8")
print(f"{len(files)} looks")
