# Processo para gerar novos looks

Este documento define um prompt reutilizável e um fluxo para acrescentar looks ao guarda-roupa sem precisar gerar todas as combinações possíveis.

## Referências visuais

Ao gerar um novo look, anexe uma ou mais imagens RAW existentes como referência visual:

- [Look sem camada externa](gpt/references/camisa-branca-calca-azul-marinho-calcado-bege.png)
- [Look com terno](gpt/references/terno-azul-marinho-camisa-azul-claro-calca-azul-marinho-calcado-marrom.png)
- [Look com blazer](gpt/references/blazer-azul-marinho-camisa-azul-claro-calca-bege-calcado-marrom.png)
- [Look com jaqueta](gpt/references/jaqueta-preta-camisa-preta-calca-preta-calcado-preto.png)

Use a referência para manter a identidade visual do modelo, o estilo fotográfico e o enquadramento. A roupa da referência é apenas uma referência de apresentação: substitua-a integralmente pelas peças especificadas no pedido atual.

## Campos a preencher antes de gerar

- **Peça principal e cor:** por exemplo, camisa azul-clara; polo vinho; suéter verde-oliva.
- **Parte de baixo e cor:** por exemplo, calça bege; short azul-marinho. Para um terno, especifique a cor do conjunto e mantenha paletó e calça na mesma cor e tecido.
- **Calçado e cor:** por exemplo, sapato marrom; tênis branco.
- **Camada externa (opcional):** nenhuma, blazer ou modelo de jaqueta, com cor e detalhes desejados.
- **Ajustes relevantes:** formalidade, caimento ou um detalhe específico. Deixe em branco se não houver.
- **Nome de arquivo:** use nomes minúsculos, sem acentos, com hífens e na ordem das peças, por exemplo `camisa-azul-claro-calca-bege-calcado-marrom.png`. Para peças externas, anteponha a peça e sua cor; para terno, use `terno-{cor}-camisa-{cor}-calca-{cor}-calcado-{cor}.png`.

Gere apenas o look pedido. O objetivo é avaliar uma combinação de cores; não é necessário gerar variações de modelo, tipo de calçado ou tipo de camisa quando a cor já representa a combinação.

## Prompt-base

Copie o texto abaixo e substitua os campos entre colchetes. Remova as opções não aplicáveis e mantenha apenas um conjunto completo na imagem.

```text
Create one photorealistic full-body menswear catalog photograph. Use the attached wardrobe reference image(s) to keep the same recurring adult male model and the established visual style: medium/light olive skin, short dark slightly wavy hair, subtle stubble, lean-to-athletic build, natural proportions, calm neutral expression. Keep the model consistent with the references; do not copy their clothes unless they are explicitly requested below.

OUTFIT — show exactly this requested combination:
- Main/top garment: [GARMENT TYPE AND COLOR]
- Bottom garment: [GARMENT TYPE AND COLOR; for a suit, matching suit trousers in the exact suit fabric and color]
- Footwear: [SHOE TYPE AND COLOR]
- Optional outer layer: [NONE, OR GARMENT TYPE, COLOR, AND DETAILS]
- Relevant styling: [OPTIONAL DETAILS]

The requested garment colors are the priority. Render each color clearly and faithfully; do not substitute, blend, or add colors. Keep the outfit coherent with the requested formality. Show every requested item clearly, with realistic garment construction, fit, fabric texture, seams, buttons, lapels, hems, and natural folds. Do not add unrequested layers, accessories, patterns, logos, text, or brand marks.

Pose the model standing naturally, facing the camera with a subtle three-quarter turn; one hand may rest naturally in a pocket and the other hang relaxed. Keep both arms, both legs, and both shoes visible, anatomically correct, and unobstructed. Use a seamless plain light-gray studio background, soft even studio lighting, realistic soft contact shadows, neutral color balance, and a clean understated e-commerce/editorial catalog look.

COMPOSITION AND OUTPUT: Generate a 1536 x 1024 landscape image. Place the complete person precisely in the horizontal center, entirely inside the central 776-pixel-wide vertical strip (x=380 to x=1156). Leave the side areas as plain background. The full head and both shoes must fit inside that central strip with a small margin; do not crop the body. This central strip will be cropped to create the final portrait image. No frame, collage, extra people, props, captions, or watermark.
```

## Variações por tipo de look

Use o mesmo prompt-base para qualquer roupa. Acrescente somente a instrução específica necessária:

- **Terno:** peça um conjunto completo e coordenado. O paletó e a calça do terno devem ter a mesma cor e tecido; camisa e calçado seguem os campos escolhidos. Não tratar a calça como uma peça independente de outra cor.
- **Blazer:** especifique o blazer como camada externa e descreva por baixo a camisa, a parte de baixo e o calçado. Não transforme o blazer em terno: a calça não deve parecer parte de um conjunto, exceto se isso for pedido.
- **Jaqueta:** especifique o modelo (por exemplo, couro ou bomber), a cor e se deve estar aberta ou fechada. Mantenha visíveis as peças pedidas por baixo.
- **Sem camada externa:** indique `NONE` e não acrescente paletó, blazer, jaqueta, colete ou outra camada.
- **Outros tipos de peça:** substitua camisa/calça/sapato pelos tipos pedidos (por exemplo, polo, suéter, short, bota ou tênis). O foco é validar cores; não gere outro look só para trocar o tipo de peça quando a combinação de cor for a mesma.

## Fluxo de geração e validação

1. Escolha uma combinação de cores específica e preencha os campos do prompt. Consulte os filtros e decisões atuais no [README](README.md); não invente combinações adicionais.
2. Anexe uma referência RAW de composição semelhante. Se a peça solicitada for um terno ou uma camada externa, prefira anexar também uma referência desse tipo.
3. Gere uma imagem em 1536 x 1024 e salve o PNG em `gpt/to_crop/`.
4. Confira a imagem antes de incorporá-la: combinação e tons corretos, peças visíveis, terno coordenado quando aplicável, modelo inteiro dentro da faixa central, mãos e calçados naturais, sem elementos extras.
5. Use `python3 crop.py` para cortar os lados de acordo com as imagens existentes. O script move os resultados válidos de `gpt/to_crop/` para `gpt/raws/`. Ele aceita apenas arquivos de 1536 x 1024; verifique qualquer arquivo que seja ignorado por ter outras dimensões.
6. Converta para WebP com `python3 convert_looks_to_webp.py`. O original RAW permanece em `gpt/raws/` e a imagem de site é criada em `gpt/compressed/`.
7. Atualize o catálogo da galeria em `script.js` e execute `python3 build_index.py` para incluir o nome do novo look no combinador. Confirme que os caminhos e filtros correspondem à combinação aprovada.

Só mantenha combinações aprovadas. Uma combinação de cores validada pode representar outras peças ou tipos de calçado da mesma cor; evite gerar variações redundantes.
