"""Gera gpt-index.json com os PNGs de looks em gpt/ (só camisa + calça + calçado).

Jaqueta, blazer e terno ficam fora do índice — aparecem só na galeria, não no combinador.
"""
import json
from pathlib import Path

ROOT = Path(__file__).parent
files = sorted(p.name for p in (ROOT / "gpt").glob("camisa-*-calca-*-calcado-*.png"))
(ROOT / "gpt-index.json").write_text(json.dumps(files, ensure_ascii=False), encoding="utf-8")
print(f"{len(files)} looks")
