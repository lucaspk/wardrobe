# Wardrobe
Combinação de roupas para escolher

Para gerar e validar novos looks com um prompt reutilizável, consulte [PROMPT-GERAR-LOOKS.md](PROMPT-GERAR-LOOKS.md).

Não precisa gerar todos os tipos de calçados e nem todos os tipos de roupas.

Colocar isso no header do site para eu lembrar

A combinação de cores ficou boa - camisa, calça, sapato...? 
- Vai servir tanto para camisetas, polos, suéteres, gola alta (turtleneck) etc. 
- Também serve para shorts, bermudas...
- Também serve para calçados: botas, loafers, tênis...
- *O CONCEITO BASTA; A COMBINAÇÃO TER FICADO BOA BASTA.*





CAMISA

Amarelo claro ✅ 
Azul claro ✅ 
Rosa claro  ✅ 
Verde Oliva ✅ 
Lilas claro ✅ 

Vinho ✅ 
Vermelho ✅ 

Azul Marinho ✅ 
Preto ✅ 
Verde Escuro ✅ 

Marrom ✅ 

Bege ✅ 
Branco/Off-white ✅ 
Creme  ✅ 
Cinza claro ✅ 
Cinza pedra ✅ 


Cáqui X -> reduzir a creme
Chumbo X -> reduzir a cinza pedra

Vermelho Ferrugem / Terracota ✅
Mostarda
Verde Eucalipto
Azul Petróleo




Gerar looks mesmos looks atuais com
- Tênis branco ✅ 
- Tênis preto -> sapato preto já basta para saber se presta
- Preencher faltantes de preto ✅ 
- Preencher faltantes de marrom ✅ 
- calcado caramelo
- calcado cinza claro ✅
- calcado azul claro
- calcado marinho X

# Não precisa gerar para todos os tipos de calçados
Se ficou bom com sapato de cor X, ficará bom com bota e outros tipos de calçado com cor X.

Só basta validar a cor. O modelo do calçado em si não importa muito.

# Não precisa gerar para outros tipos de peças de baixo
Se a combinação de cor ficou boa para calça, também fica para short.

# Não precisa gerar para outros tipos de camisas
Se fica bom com manga longa a cor, então não precisa gerar para t-shirt, polo, suéter.

A COR PROVA A COMBINAÇÃO.

Depois looks com 
- jaqueta de couro preta / marrom [off] 
- bomber Jacket preta / verde / azul [off]
- terno ✅
- blazer por cima [deixar off]




## Decisões do combinador — blazer e jaqueta temporariamente desativados

Blazer e jaqueta foram removidos do seletor do combinador por enquanto. **Não apagar as imagens existentes**: elas permanecem na galeria e as decisões abaixo permitem restaurar as opções quando solicitado.

### Regras gerais para restaurar

- Camada externa é mutuamente exclusiva: “Sem camada”, “Terno”, “Blazer” ou “Jaqueta”.
- Usar a mesma fileira única de amostras de camisa, calça e calçado; a camada selecionada apenas filtra as cores não permitidas. Não criar fileiras duplicadas para configurar permissões.
- “Sem camada” remove os filtros e restaura todas as cores originais.
- Manter os contadores sincronizados com as amostras visíveis.
- Terno continua ativo no combinador: esconde calça e filtra as peças conforme definido abaixo.

### Blazer

- Cores do blazer: marinho médio, marinho escuro, cinza, bege, grafite, branco, marrom.
- Camisas permitidas: azul claro, rosa claro, branco/off-white, bege, preta, azul marinho, marrom, verde oliva e vinho. “Branco” listado duas vezes foi tratado como uma só opção.
- Calças: a lista específica ainda não foi definida; até informar as cores desejadas, manter todas disponíveis.
- Calçados: todas as cores disponíveis no seletor de calçados.

### Jaqueta

- Cores da jaqueta: preta, marrom, caramelo e bege. A lista anterior preta/marrom/verde/azul foi substituída por esta.
- Camisas, calças e calçados permitidos: usar as mesmas listas definidas para blazer, inclusive manter todas as calças disponíveis enquanto a lista específica não for definida.

### Terno (permanece ativo)

- Cores que têm imagens de terno no repositório: azul claro, azul marinho, bege, branco, cáqui, caramelo, cinza claro, cinza pedra, ferrugem, lilás, marrom, preto, verde oliva e vinho.
- Camisas permitidas: azul claro, rosa claro e branco.
- Calçados permitidos: bege, caramelo, cinza claro, marrom, preto e tênis branco.
- Não mostrar seletor de calça em modo terno.

### Imagens conhecidas para blazer/jaqueta

- `gpt/references/blazer-azul-marinho-camisa-azul-claro-calca-bege-calcado-marrom.png`
- `gpt/references/jaqueta-preta-camisa-preta-calca-preta-calcado-preto.png`

## Conversão de looks PNG para WebP

Os PNGs originais ficam em `gpt/raws/`; imagens usadas como referências ficam em `gpt/references/`. Execute `python3 convert_looks_to_webp.py` para converter os PNGs de `gpt/raws/` para WebP em `gpt/compressed/`. O script usa Pillow (instale com `python3 -m pip install Pillow` se necessário), qualidade padrão 82 e método de codificação 6. A qualidade pode ser alterada com `--quality 1-100`.

Os PNGs originais são preservados. Se o WebP de destino já existir, o script o mantém e pula a conversão daquele arquivo. Execute novamente para converter imagens novas adicionadas à pasta. `build_index.py` lê os nomes dos looks em `gpt/raws/` e `gpt/references/`, e `crop.py` grava os novos crops em `gpt/raws/`.
