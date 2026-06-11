"""Lista lacunas de calçado preto/marrom e grava manifest em gpt/to_crop/gaps.json."""
import json
import re
from collections import defaultdict
from pathlib import Path

BASE = Path(__file__).parent
GPT = BASE / "gpt"
TO_CROP = GPT / "to_crop"

CAMISA = {
    "amarela": "bright yellow", "azul-claro": "light blue", "azul-marinho": "navy blue",
    "azul-petroleo": "deep petrol teal blue", "bege": "beige tan", "branca": "crisp white",
    "branco": "crisp white", "cinza": "medium gray", "cinza-claro": "light gray",
    "cinza-pedra": "stone gray", "cinza-escuro": "dark gray", "creme": "cream off-white",
    "lilas": "soft lilac purple", "marrom": "dark brown", "preta": "black", "rosa": "light pink",
    "verde": "green", "verde-claro": "light green", "verde-escuro": "dark green",
    "verde-militar": "olive military green", "verde-oliva": "olive green",
    "vermelha": "red", "vinho": "burgundy wine red", "cores": "multicolor patterned",
    "ferrugem": "rust orange-brown", "laranja-queimado": "burnt orange",
}
CALCA = {
    "azul-marinho": "navy blue", "bege": "beige khaki", "branca": "crisp white",
    "cinza": "medium gray", "cinza-claro": "light gray", "cinza-pedra": "stone gray",
    "creme": "cream off-white", "marrom": "dark brown", "preta": "black",
    "verde-militar": "olive military green", "verde-oliva": "olive green",
    "vinho": "burgundy wine", "cores": "multicolor patterned",
}
CALCADO = {
    "preto": "black leather oxford shoes",
    "marrom": "dark brown leather oxford shoes",
}
ALT_CALCADO = ["marrom", "preto", "tenis-branco", "azul-marinho", "bege", "caramelo", "branco"]
STYLE = (
    "Full-length studio photo, man on plain light gray background, left hand in pocket, "
    "facing camera. {shirt} long-sleeve dress shirt tucked in, {pants} tailored dress pants "
    "with crease, {shoes}. Professional menswear catalog, photorealistic, clean minimal lighting."
)
FALLBACK_REF = GPT / "camisa-preta-calca-bege-calcado-marrom.png"


def parse(stem: str):
    m = re.match(
        r"^(?:(blazer|jaqueta)-[^-]+-)?camisa-(.+)-calca-(.+)-calcado-(.+)$", stem
    )
    if not m:
        return None
    extra, camisa, calca, calcado = m.groups()
    if extra:
        return None
    return camisa, calca, calcado


def find_ref(camisa: str, calca: str, needed: str, by_combo: dict) -> str:
    foot = by_combo.get((camisa, calca), set())
    for alt in ALT_CALCADO:
        if alt in foot and alt != needed:
            p = GPT / f"camisa-{camisa}-calca-{calca}-calcado-{alt}.png"
            if p.exists():
                return str(p)
    for (c, ca), fo in by_combo.items():
        if c == camisa and ca != calca:
            for alt in ALT_CALCADO:
                if alt in fo:
                    p = GPT / f"camisa-{c}-calca-{ca}-calcado-{alt}.png"
                    if p.exists():
                        return str(p)
    return str(FALLBACK_REF)


def collect_gaps() -> list[dict]:
    by_combo: dict[tuple[str, str], set[str]] = defaultdict(set)
    for f in GPT.glob("*.png"):
        p = parse(f.stem)
        if p:
            by_combo[p[:2]].add(p[2])

    gaps = []
    for (camisa, calca), foot in sorted(by_combo.items()):
        for calcado in ("preto", "marrom"):
            if calcado in foot:
                continue
            fname = f"camisa-{camisa}-calca-{calca}-calcado-{calcado}.png"
            if (TO_CROP / fname).exists():
                continue
            shirt = CAMISA.get(camisa, camisa.replace("-", " "))
            pants = CALCA.get(calca, calca.replace("-", " "))
            gaps.append({
                "file": fname,
                "camisa": camisa,
                "calca": calca,
                "calcado": calcado,
                "prompt": STYLE.format(
                    shirt=shirt.capitalize(), pants=pants, shoes=CALCADO[calcado]
                ),
                "reference": find_ref(camisa, calca, calcado, by_combo),
            })
    return gaps


def main():
    TO_CROP.mkdir(parents=True, exist_ok=True)
    gaps = collect_gaps()
    manifest = TO_CROP / "gaps.json"
    manifest.write_text(json.dumps(gaps, indent=2, ensure_ascii=False))
    preto = sum(1 for g in gaps if g["calcado"] == "preto")
    marrom = sum(1 for g in gaps if g["calcado"] == "marrom")
    print(f"Lacunas: {len(gaps)} (preto={preto}, marrom={marrom})")
    print(f"Manifest: {manifest}")


if __name__ == "__main__":
    main()
