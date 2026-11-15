---
name: gerar-looks
description: Gera looks do guarda-roupa (camisa, camiseta, bermuda, terno, blazer, jaqueta), recorta, converte WebP e atualiza o índice. Use when generating outfit images, looks, camisetas, bermudas, or running the gpt/to_crop pipeline.
---

# Gerar looks

1. Gerar PNGs em `gpt/to_crop/` com o filename do look.
2. Rodar `python3 scripts/finish_looks.py`.
3. Não editar `combinator.js` se as cores já existem na paleta. Só editar se a cor for nova (id + hex) ou se o tipo de peça ainda não existir na UI.
4. Não editar `script.js` para cadastrar looks.
5. Não fazer QA visual (não ler imagens, não screenshot, não abrir o combinador para conferir foto).
6. Lote pequeno: sem subagente. Matriz grande: batches paralelos.
7. Uma referência WebP. Respeitar `data/combinator-rules.json` (não gerar o que o modo oculta). Para desabilitar cor na UI, editar esse JSON.
8. Apagar só fontes desta geração depois do script ok.

Prompt curto: mesmo modelo/pose/fundo; mudar só as peças pedidas; hex da cor; canvas para recorte central 776×1024.
