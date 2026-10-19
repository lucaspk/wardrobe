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
- **Nome de arquivo:** use nomes minúsculos, sem acentos, com hífens e na ordem das peças, por exemplo `camisa-azul-claro-calca-bege-calcado-marrom.png`. Para peças externas, anteponha a peça e sua cor; para terno, use `terno-{cor}-camisa-{cor}-calca-{cor}-calcado-{cor}.png`. Salve o PNG diretamente na raiz de `gpt/`, nunca em `gpt/raws/`, `gpt/references/` ou `gpt/compressed/`.

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

COMPOSITION AND OUTPUT: Generate the final portrait image at 776 x 1024 pixels, matching the reference framing. Show the complete person from head to both shoes with a small margin; do not crop the body. Do not add horizontal side margins, frame, collage, extra people, props, captions, or watermark. Save the generated PNG directly in the repository's gpt/ directory using this filename: [FILENAME.png].
```

## Variações por tipo de look

Use o mesmo prompt-base para qualquer roupa. Acrescente somente a instrução específica necessária:

- **Terno:** peça um conjunto completo e coordenado. O paletó e a calça do terno devem ter a mesma cor e tecido; camisa e calçado seguem os campos escolhidos. Não tratar a calça como uma peça independente de outra cor. A camisa lilás é representada pelo slug `lilas` no nome do arquivo e pela cor `lilas-claro` no seletor.
- **Blazer:** especifique o blazer como camada externa e descreva por baixo a camisa, a parte de baixo e o calçado. Não transforme o blazer em terno: a calça não deve parecer parte de um conjunto, exceto se isso for pedido.
- **Jaqueta:** especifique o modelo (por exemplo, couro ou bomber), a cor e se deve estar aberta ou fechada. Mantenha visíveis as peças pedidas por baixo.
- **Sem camada externa:** indique `NONE` e não acrescente paletó, blazer, jaqueta, colete ou outra camada.
- **Outros tipos de peça:** substitua camisa/calça/sapato pelos tipos pedidos (por exemplo, polo, suéter, short, bota ou tênis). O foco é validar cores; não gere outro look só para trocar o tipo de peça quando a combinação de cor for a mesma.

## Fluxo de geração e validação

1. Escolha uma combinação de cores específica e preencha os campos do prompt. Consulte os filtros e decisões atuais no [README](README.md); não invente combinações adicionais.
2. Anexe uma referência RAW de composição semelhante. Se a peça solicitada for um terno ou uma camada externa, prefira anexar também uma referência desse tipo.
3. Copie a imagem gerada para `gpt/to_crop/`, recorte o centro em 776 × 1024 e salve o PNG final na raiz de `gpt/`. O utilitário de recorte fica em `scripts/crop.py`; execute-o a partir da raiz com `python3 scripts/crop.py`. Remova a fonte temporária após validar o recorte. Não grave em `gpt/raws/`; essa pasta guarda os originais arquivados e não participa do pipeline.
4. Confira a imagem antes de incorporá-la: combinação e tons corretos, peças visíveis, terno coordenado quando aplicável, modelo inteiro, mãos e calçados naturais, sem elementos extras.
5. A partir da raiz do projeto, converta os PNGs da raiz de `gpt/` para WebP com `python3 scripts/convert_looks_to_webp.py`. Os originais ficam na raiz de `gpt/` e os arquivos para o site são criados em `gpt/compressed/`. O conversor não percorre subpastas como `raws/` nem `references/`.
6. A partir da raiz do projeto, execute `python3 scripts/build_index.py` para incluir os looks no combinador. O arquivo `data/gpt-index.json` reúne PNGs novos na raiz e WebPs já comprimidas; ignora `raws/` e `references/`. O `assets/js/script.js` recebe o look selecionado pelo combinador e permite salvá-lo nos favoritos, sem catálogo estático. Confirme os caminhos, filtros e cores das peças nos dois fluxos.

Para uma nova série, gere e valide primeiro uma única imagem de amostra. Só após a aprovação, gere o restante das combinações em lotes paralelos, sem duplicatas, e converta as imagens novas.

Só mantenha combinações aprovadas. Uma combinação de cores validada pode representar outras peças ou tipos de calçado da mesma cor; evite gerar variações redundantes.

## Série de camisas lilás com terno

Série aprovada: camisa lilás com cada uma das 14 cores de terno e cada uma das 6 cores de calçado atualmente disponíveis no combinador. A matriz completa tem 84 combinações. A calça deve combinar com a cor do terno.

A imagem inicial abaixo foi aprovada e deve ser usada como referência visual para toda a série:

- Terno bege
- Camisa lilás
- Calça bege, no mesmo tecido do terno
- Calçado bege
- Nome de arquivo: `terno-bege-camisa-lilas-calca-bege-calcado-bege.png`
- Salvar o PNG diretamente em `gpt/`

Série concluída: 84 combinações disponíveis, incluindo a amostra aprovada e 83 imagens novas geradas em lotes paralelos, sem duplicatas. Todos os PNGs foram recortados em 776 × 1024 e salvos na raiz de `gpt/`, com WebP correspondente em `gpt/compressed/`, entradas em `assets/js/script.js` e índice do combinador atualizado. A camisa lilás da amostra e as imagens existentes de cada terno orientaram os tons do conjunto e dos calçados.

## Séries de camisas preta e verde oliva com terno

Séries concluídas no mesmo padrão da série lilás: 84 combinações com camisa preta e 84 com camisa verde oliva, cobrindo as 14 cores de terno e as 6 cores de calçado do combinador. Os 168 looks têm PNG final e WebP em 776 × 1024, cadastro na galeria e resolução validada no combinador.

Conjunto de prompts: manter modelo, pose, fundo cinza, iluminação, terno coordenado e calçados do look lilás correspondente; substituir somente a camisa por preta ou verde oliva. Usar também uma imagem existente da camisa solicitada como referência de cor. Não acrescentar gravata, acessórios, padrões ou marcas.

Usar `preta` e `verde-oliva` nos nomes dos arquivos; os seletores correspondentes são `preto` e `verde-oliva`. Gerar as fontes em `gpt/to_crop/`, recortar o centro para 776 × 1024 e salvar os PNGs finais na raiz de `gpt/`, com WebP em `gpt/compressed/`. Incluir as duas cores entre as camisas permitidas em modo terno.

## Séries de camisas amarelo claro e vinho com terno

Pedido autorizado no mesmo padrão da série lilás: 84 combinações com camisa amarelo claro e 84 com camisa vinho, cobrindo os 14 ternos e os 6 calçados. Preservar modelo, pose, fundo, iluminação, terno coordenado e calçados do look lilás correspondente; substituir somente a camisa pela cor solicitada, usando uma imagem existente dessa camisa como referência de tom. Amarelo claro deve ser pastel suave; vinho deve ser bordô, sem virar vermelho vivo.

Séries concluídas em 18/10/2026: 84 looks com camisa amarelo claro e 84 com camisa vinho. A retomada gerou as 90 combinações pendentes em lotes paralelos com o gerador integrado, preservando as 78 anteriores. Todos os 168 looks têm PNG na raiz de `gpt/` e WebP em `gpt/compressed/`, recortados em 776 × 1024. A matriz completa foi validada no combinador, incluindo os caminhos das imagens usadas pelos favoritos e as cores das camisas em `assets/js/script.js`.

Usar `amarela` e `vinho` nos nomes dos arquivos; os seletores são `amarelo-claro` e `vinho`. Manter o fluxo `gpt/to_crop/` → recorte → PNG em `gpt/` → WebP em `gpt/compressed/`, atualizando o índice apenas com imagens concluídas. Remover fontes temporárias, folhas de revisão, scripts auxiliares da sessão e o arquivo de pendências após validar a série completa.
