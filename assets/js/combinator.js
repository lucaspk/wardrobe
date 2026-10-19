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
      { id: 'ferrugem', label: 'Ferrugem', hex: '#B85A38', altHex: '#C46830' },
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

  const OUTERWEAR = {
    terno: {
      label: 'Terno',
      palette: [
        { id: 'azul-marinho', label: 'Azul marinho', hex: '#1E3A5F' },
        { id: 'azul-claro', label: 'Azul claro', hex: '#A8C8E0' },
        { id: 'cinza-pedra', label: 'Cinza pedra', hex: '#8A8880' },
        { id: 'cinza-claro', label: 'Cinza claro', hex: '#B0B0AE' },
        { id: 'preto', label: 'Preto', hex: '#1A1A1A' },
        { id: 'bege', label: 'Bege', hex: '#D4C4A8' },
        { id: 'branco', label: 'Branco', hex: '#F2F0EC' },
        { id: 'marrom', label: 'Marrom', hex: '#6B4A32' },
        { id: 'caramelo', label: 'Caramelo', hex: '#A87848' },
        { id: 'caqui', label: 'Cáqui', hex: '#B0A080' },
        { id: 'ferrugem', label: 'Ferrugem', hex: '#B85A38' },
        { id: 'lilas', label: 'Lilás', hex: '#D4C4E8' },
        { id: 'verde-oliva', label: 'Verde oliva', hex: '#6B7A4A' },
        { id: 'vinho', label: 'Vinho', hex: '#6B2D3C' },
      ],
    },
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
    terno: {},
  };

  const DEFAULTS = { camisa: 'ferrugem', calca: 'verde-oliva', calcado: 'preto' };
  const state = { ...DEFAULTS, outerwear: null, outerwearColor: null };
  const OUTERWEAR_ALLOWED_COLORS = {
    terno: {
      default: {
        camisa: ['azul-claro', 'rosa-claro', 'branco', 'lilas-claro', 'preto', 'verde-oliva', 'amarelo-claro', 'vinho'],
        calcado: ['bege', 'caramelo', 'cinza-claro', 'marrom', 'preto', 'branco'],
      },
    },
  };
  let gptIndex = new Set();
  let ready = false;

  const previewImg = document.getElementById('combo-preview-img');
  const placeholder = document.getElementById('combo-placeholder');
  const placeholderText = placeholder?.querySelector('.combo-placeholder-text');
  const comboEl = document.getElementById('combo-label');

  function findColor(piece, id) {
    return PALETTE[piece].find((c) => c.id === id);
  }

  function variants(piece, id) {
    return SLUG_VARIANTS[piece]?.[id] ?? [id];
  }

  function currentAllowedColors(piece) {
    if (!state.outerwear) return PALETTE[piece].map(({ id }) => id);
    if (state.outerwear === 'terno') return OUTERWEAR_ALLOWED_COLORS.terno.default[piece] ?? [];
    return OUTERWEAR_ALLOWED_COLORS[state.outerwear][state.outerwearColor][piece];
  }

  function candidateFilenames() {
    if (state.outerwear === 'terno') {
      const shirtVariants = variants('camisa', state.camisa).join('|');
      const shoeVariants = variants('calcado', state.calcado).join('|');
      const suitVariants = variants('terno', state.outerwearColor).join('|');
      const pattern = new RegExp(`^terno-(?:${suitVariants})-camisa-(?:${shirtVariants})-calca-.+-calcado-(?:${shoeVariants})(?:-\\d+)?\\.png$`, 'i');
      return [...gptIndex].filter((name) => pattern.test(name));
    }

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
    return null;
  }

  function updateLabel() {
    const parts = [];
    if (state.outerwear) {
      const outerColor = OUTERWEAR[state.outerwear].palette.find((color) => color.id === state.outerwearColor);
      parts.push({
        label: outerColor
          ? `${OUTERWEAR[state.outerwear].label} ${outerColor.label.toLowerCase()}`
          : OUTERWEAR[state.outerwear].label,
        color: outerColor?.hex,
      });
    }
    const pieces = state.outerwear === 'terno' ? ['camisa', 'calcado'] : ['camisa', 'calca', 'calcado'];
    parts.push(...pieces.map((p) => {
      const names = { camisa: 'Camisa', calca: 'Calça', calcado: 'Calçado' };
      if (state.outerwear && p !== 'calcado' && !currentAllowedColors(p).includes(state[p])) {
        return { label: `${names[p]} não selecionada` };
      }
      const color = findColor(p, state[p]);
      return { label: `${names[p]} ${color.label.toLowerCase()}`, color: color.hex };
    }));
    comboEl.innerHTML = parts.map(({ label, color }) => `
      <span class="look-part">
        ${color ? `<span class="look-part-swatch" style="--part-color: ${color}" aria-hidden="true"></span>` : ''}
        ${label}
      </span>
    `).join('');
    return parts.map(({ label }) => label).join(' · ');
  }

  function updatePlaceholder() {
    const outerwearEl = document.getElementById('ph-outerwear');
    if (outerwearEl) {
      outerwearEl.hidden = !state.outerwear;
      if (state.outerwear) {
        const outerColor = OUTERWEAR[state.outerwear].palette
          .find((color) => color.id === state.outerwearColor);
        outerwearEl.style.background = outerColor?.hex ?? '#3d4f5f';
      }
    }
    document.getElementById('ph-calca').hidden = state.outerwear === 'terno';
    [
      ['ph-camisa', 'camisa'],
      ['ph-calca', 'calca'],
      ['ph-calcado', 'calcado'],
    ].forEach(([elId, piece]) => {
      const el = document.getElementById(elId);
      if (el) el.style.background = findColor(piece, state[piece]).hex;
    });
  }

  function updateMainSwatches() {
    ['camisa', 'calca', 'calcado'].forEach((piece) => {
      const allowed = new Set(currentAllowedColors(piece));
      const buttons = [...document.querySelectorAll(`.swatch[data-piece="${piece}"]`)];
      buttons.forEach((button) => {
        const enabled = !state.outerwear || allowed.has(button.dataset.id);
        button.hidden = !enabled;
        const active = button.dataset.id === state[piece];
        button.classList.toggle('active', active);
      });
      const selectedLabel = document.getElementById(`selected-${piece}`);
      if (selectedLabel) selectedLabel.textContent = findColor(piece, state[piece]).label;
      const countEl = document.getElementById(`count-${piece}`);
      const count = buttons.filter((button) => !button.hidden).length;
      if (countEl) countEl.textContent = `${count} opç${count === 1 ? 'ão' : 'ões'}`;
    });
    document.getElementById('calca-control-group')?.classList.toggle('hidden', state.outerwear === 'terno');
  }

  function render() {
    const name = updateLabel();
    updatePlaceholder();
    updateMainSwatches();
    if (!ready) return;

    const file = resolveFile();
    window.dispatchEvent(new CustomEvent('wardrobe:current-look', {
      detail: file ? { file, name } : null,
    }));

    if (file) {
      previewImg.src = `gpt/compressed/${file.replace(/\.png$/i, '.webp')}`;
      previewImg.hidden = false;
      placeholder.hidden = true;
    } else {
      previewImg.hidden = true;
      placeholder.hidden = false;
      if (placeholderText) {
        placeholderText.textContent = state.outerwear
          ? 'Look ainda não gerado para esta combinação'
          : 'Ainda não gerado';
      }
    }
  }

  function buildSwatches(piece, container) {
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
    if (state.outerwear && !currentAllowedColors(piece).includes(id)) return;
    state[piece] = id;
    render();
  }

  function updateOuterwearControls() {
    const settings = document.getElementById('outerwear-settings');
    const swatches = document.getElementById('swatches-outerwear');
    const heading = document.getElementById('outerwear-colors-heading');
    const count = document.getElementById('count-outerwear');
    document.querySelectorAll('.layer-option').forEach((button) => {
      const layer = button.dataset.layer || null;
      const active = layer === state.outerwear;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    settings?.classList.toggle('hidden', !state.outerwear);
    if (!state.outerwear || !swatches || !heading) return;

    const outer = OUTERWEAR[state.outerwear];
    settings.classList.toggle('hidden', outer.palette.length === 0);
    if (outer.palette.length === 0) {
      swatches.replaceChildren();
      return;
    }
    heading.textContent = outer.label.toUpperCase();
    const selectedLabel = document.getElementById('selected-outerwear');
    const selectedColor = outer.palette.find((color) => color.id === state.outerwearColor);
    if (selectedLabel) selectedLabel.textContent = selectedColor?.label ?? '';
    if (count) {
      count.textContent = `${outer.palette.length} opç${outer.palette.length === 1 ? 'ão' : 'ões'}`;
    }
    swatches.replaceChildren();
    outer.palette.forEach((color) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'swatch';
      btn.title = color.label;
      btn.setAttribute('aria-label', color.label);
      btn.setAttribute('aria-pressed', String(color.id === state.outerwearColor));
      btn.style.setProperty('--swatch', color.hex);
      if (color.id === state.outerwearColor) btn.classList.add('active');
      btn.addEventListener('click', () => {
        state.outerwearColor = color.id;
        ['camisa', 'calca', 'calcado'].forEach((piece) => {
          const allowed = currentAllowedColors(piece);
          if (allowed.length && !allowed.includes(state[piece])) state[piece] = allowed[0];
        });
        updateOuterwearControls();
        render();
      });
      swatches.appendChild(btn);
    });

  }

  function selectLayer(layer) {
    if (!layer || state.outerwear === layer) {
      state.outerwear = null;
      state.outerwearColor = null;
    } else {
      state.outerwear = layer;
      const palette = OUTERWEAR[layer].palette;
      if (palette.length) {
        state.outerwearColor ??= palette[0].id;
        if (!palette.some((color) => color.id === state.outerwearColor)) {
          state.outerwearColor = palette[0].id;
        }
      } else {
        state.outerwearColor = null;
      }
      ['camisa', 'calca', 'calcado'].forEach((piece) => {
        const allowed = currentAllowedColors(piece);
        if (allowed.length && !allowed.includes(state[piece])) state[piece] = allowed[0];
      });
    }
    updateOuterwearControls();
    render();
  }

  const COMBO_FILENAME = /^camisa-.+-calca-.+-calcado-.+\.png$|^terno-.+-camisa-.+-calca-.+-calcado-.+\.png$/i;

  async function loadIndex() {
    const res = await fetch('data/gpt-index.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('data/gpt-index.json ausente');
    gptIndex = new Set((await res.json()).filter((name) => COMBO_FILENAME.test(name)));
    ready = true;
    render();
  }

  function init() {
    if (!previewImg) return;

    buildSwatches('camisa', document.getElementById('swatches-camisa'));
    buildSwatches('calca', document.getElementById('swatches-calca'));
    buildSwatches('calcado', document.getElementById('swatches-calcado'));
    updateOuterwearControls();
    updateMainSwatches();

    loadIndex().catch((error) => {
      console.error('Não foi possível carregar as combinações do combinador.', error);
      if (placeholderText) placeholderText.textContent = 'Não foi possível carregar as combinações';
      placeholder.hidden = false;
    });

    document.querySelectorAll('.layer-option').forEach((button) => {
      button.addEventListener('click', () => selectLayer(button.dataset.layer || null));
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
