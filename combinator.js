/* Combinador: escolhe cores → mostra PNG real do GPT se existir */

(function () {
  const PALETTE = {
    camisa: [
      { id: 'amarelo-claro', label: 'Amarelo claro', hex: '#F5E6A8' },
      { id: 'azul-claro', label: 'Azul claro', hex: '#A8C8E0' },
      { id: 'rosa-claro', label: 'Rosa claro', hex: '#F0C4C8' },
      { id: 'verde-oliva', label: 'Verde oliva', hex: '#6B7A4A' },
      { id: 'lilas-claro', label: 'Lilás claro', hex: '#D4C4E8' },
      { id: 'vinho', label: 'Vinho', hex: '#6B2D3C' },
      { id: 'vermelho', label: 'Vermelho', hex: '#B83232' },
      { id: 'azul-marinho', label: 'Azul marinho', hex: '#1E3A5F' },
      { id: 'preto', label: 'Preto', hex: '#1A1A1A' },
      { id: 'verde-escuro', label: 'Verde escuro', hex: '#2D4A35' },
      { id: 'marrom', label: 'Marrom', hex: '#6B4A32' },
      { id: 'bege', label: 'Bege', hex: '#D4C4A8' },
      { id: 'branco', label: 'Branco', hex: '#F2F0EC' },
      { id: 'creme', label: 'Creme', hex: '#EDE6D6' },
      { id: 'cinza-claro', label: 'Cinza claro', hex: '#B0B0AE' },
      { id: 'cinza-pedra', label: 'Cinza pedra', hex: '#8A8880' },
      { id: 'ferrugem', label: 'Ferrugem / laranja queimado', hex: '#B85A38', altHex: '#C46830' },
    ],
    calca: [
      { id: 'preto', label: 'Preto', hex: '#1A1A1A' },
      { id: 'cinza-claro', label: 'Cinza claro', hex: '#B0B0AE' },
      { id: 'cinza-pedra', label: 'Cinza pedra', hex: '#8A8880' },
      { id: 'bege', label: 'Bege', hex: '#C8B898' },
      { id: 'creme', label: 'Creme', hex: '#E8DCC8' },
      { id: 'marrom', label: 'Marrom', hex: '#5C4030' },
      { id: 'azul-marinho', label: 'Azul marinho', hex: '#1E3A5F' },
      { id: 'verde-militar', label: 'Verde militar', hex: '#4A5A38' },
      { id: 'verde-oliva', label: 'Verde oliva', hex: '#5A6840' },
      { id: 'vinho', label: 'Vinho', hex: '#5C2830' },
    ],
    calcado: [
      { id: 'preto', label: 'Preto', hex: '#1A1A1A' },
      { id: 'marrom', label: 'Marrom', hex: '#5C4030' },
      { id: 'branco', label: 'Branco / tênis branco', hex: '#F0EEEA' },
      { id: 'cinza-claro', label: 'Cinza claro', hex: '#A8A8A6' },
      { id: 'bege', label: 'Bege', hex: '#C8B090' },
      { id: 'caramelo', label: 'Caramelo', hex: '#A87848' },
    ],
  };

  const SLUG_VARIANTS = {
    camisa: {
      'amarelo-claro': ['amarelo-claro', 'amarela'],
      'rosa-claro': ['rosa-claro', 'rosa'],
      'lilas-claro': ['lilas-claro', 'lilas'],
      branco: ['branco', 'branca'],
      'verde-escuro': ['verde-escuro', 'verde'],
      'cinza-claro': ['cinza-claro'],
      'cinza-pedra': ['cinza-pedra', 'cinza-escuro'],
      vermelho: ['vermelho', 'vermelha'],
      preto: ['preto', 'preta'],
      ferrugem: ['ferrugem', 'laranja-queimado'],
    },
    calca: {
      preto: ['preto', 'preta'],
      'cinza-pedra': ['cinza-pedra', 'cinza'],
    },
    calcado: {
      branco: ['branco', 'tenis-branco'],
      'cinza-claro': ['cinza-claro', 'cinza'],
    },
  };

  const DEFAULTS = { camisa: 'ferrugem', calca: 'verde-oliva', calcado: 'preto' };
  const state = { ...DEFAULTS };
  let gptIndex = new Set();
  let ready = false;

  const previewImg = document.getElementById('combo-preview-img');
  const placeholder = document.getElementById('combo-placeholder');
  const comboEl = document.getElementById('combo-label');

  function findColor(piece, id) {
    return PALETTE[piece].find((c) => c.id === id);
  }

  function variants(piece, id) {
    return SLUG_VARIANTS[piece]?.[id] ?? [id];
  }

  function candidateFilenames() {
    const out = [];
    for (const c of variants('camisa', state.camisa)) {
      for (const p of variants('calca', state.calca)) {
        for (const s of variants('calcado', state.calcado)) {
          out.push(`camisa-${c}-calca-${p}-calcado-${s}.png`);
        }
      }
    }
    return out;
  }

  function resolveFile() {
    for (const name of candidateFilenames()) {
      if (gptIndex.has(name)) return name;
    }
    return candidateFilenames()[0];
  }

  function updateLabel() {
    const parts = ['camisa', 'calca', 'calcado'].map((p) => {
      const names = { camisa: 'Camisa', calca: 'Calça', calcado: 'Calçado' };
      return `${names[p]} ${findColor(p, state[p]).label.toLowerCase()}`;
    });
    comboEl.textContent = parts.join(' · ');
  }

  function updatePlaceholder() {
    [
      ['ph-camisa', 'camisa'],
      ['ph-calca', 'calca'],
      ['ph-calcado', 'calcado'],
    ].forEach(([elId, piece]) => {
      const el = document.getElementById(elId);
      if (el) el.style.background = findColor(piece, state[piece]).hex;
    });
  }

  function render() {
    if (!ready) return;
    updateLabel();
    updatePlaceholder();

    const file = resolveFile();
    const exists = gptIndex.has(file);

    if (exists) {
      previewImg.src = `gpt/${file}`;
      previewImg.hidden = false;
      placeholder.hidden = true;
    } else {
      previewImg.hidden = true;
      placeholder.hidden = false;
    }
  }

  function buildSwatches(piece, container) {
    const count = PALETTE[piece].length;
    const countEl = document.getElementById(`count-${piece}`);
    if (countEl) countEl.textContent = `${count} opç${count === 1 ? 'ão' : 'ões'}`;

    container.innerHTML = '';
    PALETTE[piece].forEach((color) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'swatch';
      btn.title = color.label;
      if (color.altHex) {
        btn.style.background = `linear-gradient(135deg, ${color.hex} 50%, ${color.altHex} 50%)`;
      } else {
        btn.style.setProperty('--swatch', color.hex);
      }
      btn.dataset.piece = piece;
      btn.dataset.id = color.id;
      btn.setAttribute('aria-label', color.label);
      if (color.id === state[piece]) btn.classList.add('active');
      btn.addEventListener('click', () => selectColor(piece, color.id));
      container.appendChild(btn);
    });
  }

  function selectColor(piece, id) {
    state[piece] = id;
    document.querySelectorAll(`.swatch[data-piece="${piece}"]`).forEach((el) => {
      el.classList.toggle('active', el.dataset.id === id);
    });
    render();
  }

  function randomize() {
    ['camisa', 'calca', 'calcado'].forEach((piece) => {
      const pick = PALETTE[piece][Math.floor(Math.random() * PALETTE[piece].length)];
      selectColor(piece, pick.id);
    });
  }

  const COMBO_FILENAME = /^camisa-.+-calca-.+-calcado-.+\.png$/i;

  async function loadIndex() {
    const res = await fetch('gpt-index.json');
    if (!res.ok) throw new Error('gpt-index.json ausente');
    // Só camisa + calça + calçado — jaqueta, blazer e terno ficam só na galeria.
    gptIndex = new Set((await res.json()).filter((name) => COMBO_FILENAME.test(name)));
    ready = true;
    render();
  }

  function init() {
    if (!previewImg) return;

    buildSwatches('camisa', document.getElementById('swatches-camisa'));
    buildSwatches('calca', document.getElementById('swatches-calca'));
    buildSwatches('calcado', document.getElementById('swatches-calcado'));

    loadIndex().catch(() => {});

    document.getElementById('btn-combo-random')?.addEventListener('click', randomize);
    document.getElementById('btn-combo-reset')?.addEventListener('click', () => {
      Object.assign(state, DEFAULTS);
      ['camisa', 'calca', 'calcado'].forEach((piece) => {
        document.querySelectorAll(`.swatch[data-piece="${piece}"]`).forEach((el) => {
          el.classList.toggle('active', el.dataset.id === state[piece]);
        });
      });
      render();
    });

  }

  document.addEventListener('DOMContentLoaded', init);
})();
