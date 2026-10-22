/* Comparação: A permanece fixo enquanto o combinador edita B. */
(function () {
  function initComparison() {
    const layout = document.querySelector('.combo-layout');
    const start = document.getElementById('btn-compare-look');
    if (!layout || !start) return;
    const toolbar = document.getElementById('compare-toolbar');
    const referenceFrame = document.getElementById('compare-reference-frame');
    const referenceImage = document.getElementById('compare-reference-img');
    const referenceFavorite = document.getElementById('btn-favorite-reference');
    const badge = document.getElementById('compare-current-badge');
    const difference = document.getElementById('compare-difference');
    const switches = [...document.querySelectorAll('[data-compare-view]')];
    let current = null;
    let reference = null;
    let favoriteFiles = new Set();
    let saving = false;
    let favoriteError = '';

    function showLook(side) {
      layout.dataset.comparisonView = side;
      switches.forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.compareView === side));
      });
    }

    function describeChanges() {
      const parts = (look) => new Map((look?.name || '').split(' · ').map((part) => {
        const split = part.indexOf(' ');
        return [part.slice(0, split).toLocaleLowerCase('pt-BR'), part.slice(split + 1)];
      }));
      const a = parts(reference);
      const b = parts(current);
      const rows = [
        ['Camada', a.has('terno') ? `Terno ${a.get('terno')}` : 'Sem camada', b.has('terno') ? `Terno ${b.get('terno')}` : 'Sem camada'],
        ['Camisa', a.get('camisa'), b.get('camisa')],
        ['Calçado', a.get('calçado'), b.get('calçado')],
      ];
      if (!a.has('terno') || !b.has('terno')) {
        rows.splice(2, 0, ['Calça', a.get('calça') || a.get('terno'), b.get('calça') || b.get('terno')]);
      }
      const changes = rows.filter(([, before, after]) => before !== after)
        .map(([piece, before, after]) => `${piece}: ${before || '—'} → ${after || '—'}`);
      const message = changes.join(' · ') || 'Mesma combinação. Altere as cores para testar o look B.';
      return current?.file ? message : `Look B ainda não gerado. ${message}`;
    }

    function updateReferenceFavorite() {
      const selected = !!reference && favoriteFiles.has(reference.file);
      referenceFavorite.classList.toggle('is-favorite', selected);
      referenceFavorite.setAttribute('aria-pressed', String(selected));
      referenceFavorite.setAttribute('aria-label', saving ? 'Salvando favorito...' : selected ? 'Desfavoritar look A' : 'Favoritar look A');
      referenceFavorite.disabled = !reference || saving;
      document.getElementById('reference-favorite-status').textContent = reference ? favoriteError : '';
    }

    function renderComparison() {
      const active = !!reference;
      layout.classList.toggle('is-comparing', active);
      toolbar.hidden = !active;
      referenceFrame.hidden = !active;
      difference.hidden = !active;
      badge.hidden = !active;
      start.hidden = active;
      start.disabled = !current?.file;
      if (active) difference.textContent = describeChanges();
      updateReferenceFavorite();
    }

    function endComparison() {
      reference = null;
      referenceImage.removeAttribute('src');
      showLook('b');
      renderComparison();
      const focusTarget = start.disabled
        ? layout.querySelector('.is-mobile-active .swatch.active:not([hidden]), .is-mobile-active .layer-option.active') || document.getElementById('view-combinator')
        : start;
      focusTarget.focus();
    }

    start.addEventListener('click', () => {
      if (!current?.file) return;
      reference = { ...current };
      referenceImage.src = `gpt/compressed/${reference.file.replace(/\.png$/i, '.webp')}`;
      referenceImage.alt = reference.name;
      showLook('b');
      renderComparison();
      document.getElementById('btn-end-comparison').focus();
    });
    document.getElementById('btn-end-comparison').addEventListener('click', endComparison);
    switches.forEach((button) => button.addEventListener('click', () => showLook(button.dataset.compareView)));
    referenceFavorite.addEventListener('click', () => {
      if (reference) window.dispatchEvent(new CustomEvent('wardrobe:toggle-favorite', { detail: { ...reference } }));
    });
    document.getElementById('btn-expand-reference').addEventListener('click', () => {
      if (reference) window.dispatchEvent(new CustomEvent('wardrobe:open-look', { detail: { ...reference } }));
    });
    window.addEventListener('wardrobe:current-look', (event) => {
      current = event.detail ? { file: event.detail.file, name: event.detail.name || '' } : null;
      if (reference) showLook('b');
      renderComparison();
    });
    window.addEventListener('wardrobe:favorites-changed', (event) => {
      favoriteFiles = new Set(event.detail?.files || []);
      saving = !!event.detail?.saving;
      favoriteError = event.detail?.error || '';
      updateReferenceFavorite();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && reference && document.body.classList.contains('view-combinator') && document.getElementById('carousel-overlay').classList.contains('hidden')) {
        event.preventDefault();
        endComparison();
      }
    }, true);
    showLook('b');
    renderComparison();
    window.dispatchEvent(new CustomEvent('wardrobe:request-favorites'));
  }
  document.addEventListener('DOMContentLoaded', initComparison);
})();
