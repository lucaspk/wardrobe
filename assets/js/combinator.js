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
      { id: 'azul-petroleo', label: 'Azul petróleo (teal)', hex: '#1F6268' },
      { id: 'mostarda', label: 'Mostarda', hex: '#BA8D27' },
      { id: 'camel', label: 'Camel', hex: '#BC9263' },
    ],
    calca: [
      { id: 'preto', label: 'Preto', hex: '#1A1A1A' },
      { id: 'cinza-claro', label: 'Cinza claro', hex: '#B0B0AE' },
      { id: 'cinza-pedra', label: 'Cinza pedra', hex: '#8A8880' },
      { id: 'grafite', label: 'Chumbo / grafite', hex: '#45484C' },
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
        { id: 'grafite', label: 'Chumbo / grafite', hex: '#45484C' },
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

  const COLOR_ORDER = [
    'branco', 'creme', 'cinza-claro',
    'bege', 'caqui', 'caramelo', 'camel', 'marrom', 'ferrugem',
    'amarelo-claro', 'mostarda', 'rosa-claro', 'lilas-claro', 'lilas', 'azul-claro', 'azul-petroleo',
    'verde-oliva', 'vermelho',
    'vinho', 'verde-militar', 'verde-escuro', 'cinza-pedra', 'grafite', 'azul-marinho', 'preto',
  ];

  const COLOR_GROUPS = [
    { id: 'neutros', label: 'Neutros', colors: ['branco', 'creme', 'cinza-claro', 'cinza-pedra', 'grafite', 'azul-marinho', 'preto'] },
    { id: 'terrosos', label: 'Terrosos', colors: ['bege', 'caqui', 'caramelo', 'camel', 'marrom', 'ferrugem', 'verde-oliva', 'verde-militar', 'verde-escuro'] },
    { id: 'vivos', label: 'Vivos', colors: ['amarelo-claro', 'mostarda', 'rosa-claro', 'lilas-claro', 'lilas', 'azul-claro', 'azul-petroleo', 'vermelho', 'vinho'] },
  ];

  function groupSwatches(container) {
    const buttons = [...container.querySelectorAll('.swatch')];
    const groups = COLOR_GROUPS.map((definition) => {
      const members = buttons.filter((button) => {
        const group = COLOR_GROUPS.find(({ colors }) => colors.includes(button.dataset.id)) || COLOR_GROUPS[2];
        return group.id === definition.id;
      });
      if (!members.length) return null;
      const group = document.createElement('div');
      group.className = 'swatch-group';
      group.setAttribute('role', 'group');
      group.setAttribute('aria-label', definition.label);
      const label = document.createElement('span');
      label.className = 'swatch-group-label';
      label.textContent = definition.label;
      label.setAttribute('aria-hidden', 'true');
      const colors = document.createElement('div');
      colors.className = 'swatch-group-colors';
      colors.append(...members);
      group.append(label, colors);
      return group;
    }).filter(Boolean);
    container.replaceChildren(...groups);
  }

  function updateColorGroups() {
    document.querySelectorAll('.swatch-group').forEach((group) => {
      group.hidden = [...group.querySelectorAll('.swatch')].every((button) => button.hidden);
    });
  }

  function orderedColors(colors) {
    const rank = (color) => {
      const index = COLOR_ORDER.indexOf(color.id);
      return index < 0 ? COLOR_ORDER.length : index;
    };
    return [...colors].sort((a, b) => rank(a) - rank(b));
  }

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
      grafite: ['grafite', 'chumbo'],
    },
    calcado: {
      branco: ['branco', 'tenis-branco'],
      'cinza-claro': ['cinza-claro', 'cinza'],
    },
    terno: {
      grafite: ['grafite', 'chumbo'],
    },
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
  let mobilePiece = 'camisa';
  let mobileMedia = null;

  const previewImg = document.getElementById('combo-preview-img');
  const placeholder = document.getElementById('combo-placeholder');
  const placeholderText = placeholder?.querySelector('.combo-placeholder-text');
  const comboEl = document.getElementById('combo-label');
  const previewFrame = document.getElementById('combo-current-frame');
  const loadingStatus = document.getElementById('combo-loading-status');
  let previewRequest = 0;
  let displayedFile = null;

  function publishCurrentLook(file, name, options = {}) {
    window.dispatchEvent(new CustomEvent('wardrobe:current-look', {
      detail: { file, name, ...options },
    }));
  }

  function setPreviewLoading(loading) {
    previewFrame?.classList.toggle('is-loading', loading);
    previewFrame?.setAttribute('aria-busy', String(loading));
    previewImg.classList.toggle('is-loading', loading);
    if (loadingStatus) {
      loadingStatus.hidden = !loading;
      loadingStatus.textContent = loading ? 'Carregando foto do look…' : '';
    }
    const announcement = document.getElementById('combo-loading-announcement');
    if (announcement) announcement.textContent = loading ? 'Carregando foto do look…' : '';
  }

  function showPreviewPlaceholder(message) {
    displayedFile = null;
    previewImg.hidden = true;
    previewImg.removeAttribute('src');
    previewImg.classList.remove('is-entering');
    placeholder.hidden = false;
    if (placeholderText) placeholderText.textContent = message;
  }

  async function showPreview(file, name) {
    const request = ++previewRequest;
    if (!file) {
      setPreviewLoading(false);
      showPreviewPlaceholder(state.outerwear ? 'Look ainda não gerado para esta combinação' : 'Ainda não gerado');
      publishCurrentLook(null, name);
      return;
    }

    // Returning to the displayed look also invalidates any newer photo in flight.
    if (displayedFile === file) {
      setPreviewLoading(false);
      previewImg.alt = name;
      publishCurrentLook(file, name);
      return;
    }

    setPreviewLoading(true);
    previewImg.classList.remove('is-entering');
    if (previewImg.hidden) {
      placeholder.hidden = false;
      if (placeholderText) placeholderText.textContent = 'Preparando seu look';
    }
    // Keep actions unavailable while the visible photo still belongs to the previous selection.
    publishCurrentLook(null, name, { loading: true });

    try {
      const image = new Image();
      image.decoding = 'async';
      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = () => reject(new Error('Foto indisponível'));
        image.src = `gpt/compressed/${file.replace(/\.png$/i, '.webp')}`;
      });
      if (typeof image.decode === 'function') await image.decode();
      if (request !== previewRequest) return;

      previewImg.src = image.src;
      previewImg.alt = name;
      previewImg.hidden = false;
      placeholder.hidden = true;
      displayedFile = file;
      setPreviewLoading(false);
      // Restart the short entrance animation even when colors are changed repeatedly.
      void previewImg.offsetWidth;
      previewImg.classList.add('is-entering');
      publishCurrentLook(file, name);
    } catch (error) {
      if (request !== previewRequest) return;
      setPreviewLoading(false);
      showPreviewPlaceholder('Não foi possível carregar esta foto. Tente selecionar o look novamente.');
      publishCurrentLook(null, name, { error: true });
    }
  }

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
        button.setAttribute('aria-pressed', String(active));
      });
      const selectedLabel = document.getElementById(`selected-${piece}`);
      if (selectedLabel) selectedLabel.textContent = findColor(piece, state[piece]).label;
      const countEl = document.getElementById(`count-${piece}`);
      const count = buttons.filter((button) => !button.hidden).length;
      if (countEl) countEl.textContent = `${count} opç${count === 1 ? 'ão' : 'ões'}`;
    });
    document.getElementById('calca-control-group')?.classList.toggle('hidden', state.outerwear === 'terno');
    updateColorGroups();
    updateMobileControls();
  }

  function updateMobileControls() {
    if (state.outerwear === 'terno' && mobilePiece === 'calca') mobilePiece = 'camisa';
    document.querySelectorAll('[data-mobile-piece]').forEach((button) => {
      button.hidden = button.dataset.mobilePiece === 'calca' && state.outerwear === 'terno';
      button.setAttribute('aria-pressed', String(button.dataset.mobilePiece === mobilePiece));
    });
    document.querySelectorAll('[data-mobile-panel]').forEach((panel) => {
      panel.classList.toggle('is-mobile-active', panel.dataset.mobilePanel === mobilePiece);
    });
  }

  function scrollMobileColors() {
    if (!mobileMedia?.matches) return;
    requestAnimationFrame(() => {
      const strip = document.querySelector('.is-mobile-active .swatches');
      const selected = strip?.querySelector('.swatch.active');
      if (!selected || !strip.clientWidth) return;
      strip.scrollTo({ left: selected.offsetLeft - (strip.clientWidth - selected.offsetWidth) / 2 });
    });
  }

  function initMobileControls() {
    const controls = document.querySelector('.combo-controls');
    if (!controls) return;
    mobileMedia = window.matchMedia('(max-width: 800px)');
    const measureDock = () => {
      if (!mobileMedia.matches) return;
      const height = Math.ceil(controls.getBoundingClientRect().height);
      if (height > 0) {
        document.documentElement.style.setProperty('--mobile-controls-height', `${height}px`);
        scrollMobileColors();
      }
    };
    document.querySelectorAll('[data-mobile-piece]').forEach((button) => {
      button.addEventListener('click', () => {
        mobilePiece = button.dataset.mobilePiece;
        updateMobileControls();
        measureDock();
        scrollMobileColors();
      });
    });
    if (typeof ResizeObserver !== 'undefined') new ResizeObserver(measureDock).observe(controls);
    window.addEventListener('resize', measureDock);
    mobileMedia.addEventListener('change', () => {
      updateMobileControls();
      measureDock();
      scrollMobileColors();
    });
    updateMobileControls();
    measureDock();
    scrollMobileColors();
  }

  function render() {
    const name = updateLabel();
    updatePlaceholder();
    updateMainSwatches();
    if (!ready) return;

    showPreview(resolveFile(), name);
  }

  function buildSwatches(piece, container) {
    container.innerHTML = '';
    orderedColors(PALETTE[piece]).forEach((color) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'swatch';
      if (color.altHex) {
        btn.style.background = `linear-gradient(135deg, ${color.hex} 50%, ${color.altHex} 50%)`;
      } else {
        btn.style.setProperty('--swatch', color.hex);
      }
      btn.dataset.piece = piece;
      btn.dataset.id = color.id;
      btn.setAttribute('aria-label', color.label);
      btn.setAttribute('aria-pressed', String(color.id === state[piece]));
      if (color.id === state[piece]) btn.classList.add('active');
      btn.addEventListener('click', () => selectColor(piece, color.id));
      container.appendChild(btn);
    });
    groupSwatches(container);
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
    heading.textContent = outer.label;
    const selectedLabel = document.getElementById('selected-outerwear');
    const selectedColor = outer.palette.find((color) => color.id === state.outerwearColor);
    if (selectedLabel) selectedLabel.textContent = selectedColor?.label ?? '';
    if (count) {
      count.textContent = `${outer.palette.length} opç${outer.palette.length === 1 ? 'ão' : 'ões'}`;
    }
    swatches.replaceChildren();
    orderedColors(outer.palette).forEach((color) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'swatch';
      btn.dataset.id = color.id;
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
    groupSwatches(swatches);
    scrollMobileColors();
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

  function initColorTooltips() {
    const selector = '.swatch, [data-tooltip]';
    document.querySelectorAll('[data-tooltip][title]').forEach((element) => element.removeAttribute('title'));
    const tooltip = document.createElement('div');
    tooltip.id = 'color-name-tooltip';
    tooltip.className = 'color-tooltip';
    tooltip.setAttribute('role', 'tooltip');
    tooltip.hidden = true;
    document.body.appendChild(tooltip);
    let anchor = null;

    const hide = () => {
      if (anchor) {
        const descriptions = (anchor.getAttribute('aria-describedby') || '').split(/\s+/).filter((id) => id && id !== tooltip.id);
        if (descriptions.length) anchor.setAttribute('aria-describedby', descriptions.join(' '));
        else anchor.removeAttribute('aria-describedby');
      }
      anchor = null;
      tooltip.hidden = true;
    };
    const show = (element) => {
      if (element.matches('[data-tooltip]')) element.removeAttribute('title');
      const label = element.dataset.tooltip || element.getAttribute('aria-label');
      if (!label || element.hidden || !element.getClientRects().length) return;
      hide();
      anchor = element;
      tooltip.textContent = label;
      tooltip.hidden = false;
      const descriptions = (element.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean);
      element.setAttribute('aria-describedby', [...new Set([...descriptions, tooltip.id])].join(' '));
      const rect = element.getBoundingClientRect();
      const tip = tooltip.getBoundingClientRect();
      const left = Math.max(8, Math.min(window.innerWidth - tip.width - 8, rect.left + rect.width / 2 - tip.width / 2));
      const top = rect.top - tip.height - 8;
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top < 8 ? rect.bottom + 8 : top}px`;
    };
    document.addEventListener('pointerover', (event) => {
      if (event.pointerType === 'touch') return;
      const element = event.target.closest?.(selector);
      if (element && element !== anchor) show(element);
    });
    document.addEventListener('pointerout', (event) => {
      if (anchor && event.target.closest?.(selector) === anchor && !anchor.contains(event.relatedTarget) && !anchor.matches(':focus-visible')) hide();
    });
    document.addEventListener('focusin', (event) => {
      const element = event.target.closest?.(selector);
      if (element?.matches(':focus-visible')) show(element);
    });
    document.addEventListener('focusout', (event) => {
      if (event.target === anchor) hide();
    });
    document.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'touch' || !event.target.closest?.(selector)) hide();
    });
    document.addEventListener('click', () => {
      if (anchor && !anchor.isConnected) hide();
    });
    document.addEventListener('scroll', hide, true);
    window.addEventListener('resize', hide);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !tooltip.hidden) {
        hide();
        event.preventDefault();
      }
    }, true);
  }

  async function loadIndex() {
    const res = await fetch('data/gpt-index.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('data/gpt-index.json ausente');
    const registeredLooks = window.WARDROBE_GENERATED_LOOKS || [];
    gptIndex = new Set([...(await res.json()), ...registeredLooks].filter((name) => COMBO_FILENAME.test(name)));
    ready = true;
    render();
  }

  function init() {
    if (!previewImg) return;

    previewImg.addEventListener('animationend', (event) => {
      if (event.target === previewImg) previewImg.classList.remove('is-entering');
    });

    buildSwatches('camisa', document.getElementById('swatches-camisa'));
    buildSwatches('calca', document.getElementById('swatches-calca'));
    buildSwatches('calcado', document.getElementById('swatches-calcado'));
    updateOuterwearControls();
    updateMainSwatches();
    initMobileControls();
    initColorTooltips();

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
