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
    const currentFrame = document.getElementById('combo-current-frame');
    const currentImage = document.getElementById('combo-preview-img');
    const controls = layout.querySelector('.combo-controls');
    const badge = document.getElementById('compare-current-badge');
    const difference = document.getElementById('compare-difference');
    const switches = [...document.querySelectorAll('[data-compare-view]')];
    let current = null;
    let reference = null;
    let favoriteFiles = new Set();
    let saving = false;
    let favoriteError = '';
    let comparisonMotion = null;

    function finishComparisonMotion() {
      comparisonMotion?.finish();
    }

    function animateComparison(before, photo) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof currentFrame.animate !== 'function') return;
      const animations = [];
      let clone = null;
      let timeout;
      let finished = false;
      const visibility = referenceImage.style.visibility;
      const motion = { finish };
      comparisonMotion = motion;
      function finish() {
        if (finished) return;
        finished = true;
        clearTimeout(timeout);
        animations.forEach((animation) => animation.cancel());
        clone?.remove();
        referenceImage.style.visibility = visibility;
        if (comparisonMotion === motion) comparisonMotion = null;
      }
      const options = { duration: 380, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'both' };
      const target = referenceImage.getBoundingClientRect();
      if (photo && target.width && target.height) {
        const ratio = photo.width / photo.height;
        const width = Math.min(target.width, target.height * ratio);
        const height = width / ratio;
        const left = target.left + (target.width - width) / 2;
        const top = target.top + (target.height - height) / 2;
        clone = currentImage.cloneNode(false);
        clone.removeAttribute('id');
        clone.removeAttribute('style');
        clone.className = 'comparison-transition-image';
        clone.alt = '';
        clone.setAttribute('aria-hidden', 'true');
        Object.assign(clone.style, { left: `${photo.left}px`, top: `${photo.top}px`, width: `${photo.width}px`, height: `${photo.height}px` });
        document.body.appendChild(clone);
        referenceImage.style.visibility = 'hidden';
        animations.push(clone.animate([
          { transform: 'translate(0, 0) scale(1)' },
          { transform: `translate(${left - photo.left}px, ${top - photo.top}px) scale(${width / photo.width})` },
        ], options));
      }
      animations.push(currentFrame.animate([
        { opacity: 0, transform: 'translateX(48px)' },
        { opacity: 1, transform: 'translateX(0)' },
      ], options));
      const after = controls?.getBoundingClientRect();
      if (before && after?.width && after.height) {
        animations.push(controls.animate([
          { transform: `translate(${before.left - after.left}px, ${before.top - after.top}px)` },
          { transform: 'translate(0, 0)' },
        ], options));
      }
      animations.push(toolbar.animate([{ opacity: 0 }, { opacity: 1 }], options));
      Promise.all(animations.map((animation) => animation.finished)).then(finish, finish);
      timeout = setTimeout(finish, 430);
    }

    function animateComparisonExit(before, photo, referenceSnapshot, complete) {
      const animations = [];
      let clone = null;
      let timeout;
      let finished = false;
      const visibility = currentImage.style.visibility;
      const motion = { closing: true, finish };
      comparisonMotion = motion;
      function finish() {
        if (finished) return;
        finished = true;
        clearTimeout(timeout);
        animations.forEach((animation) => animation.cancel());
        clone?.remove();
        referenceSnapshot.remove();
        currentImage.style.visibility = visibility;
        if (comparisonMotion === motion) comparisonMotion = null;
        complete();
      }
      const options = { duration: 380, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'both' };
      const target = window.photoBounds?.(currentImage);
      if (photo && target) {
        clone = currentImage.cloneNode(false);
        clone.removeAttribute('id');
        clone.removeAttribute('style');
        clone.className = 'comparison-transition-image';
        clone.alt = '';
        clone.setAttribute('aria-hidden', 'true');
        Object.assign(clone.style, { left: `${photo.left}px`, top: `${photo.top}px`, width: `${photo.width}px`, height: `${photo.height}px` });
        document.body.appendChild(clone);
        currentImage.style.visibility = 'hidden';
        animations.push(clone.animate([
          { transform: 'translate(0, 0) scale(1)' },
          { transform: `translate(${target.left - photo.left}px, ${target.top - photo.top}px) scale(${target.width / photo.width})` },
        ], options));
      }
      animations.push(referenceSnapshot.animate([
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(-48px)' },
      ], options));
      animations.push(currentFrame.animate([{ opacity: 0 }, { opacity: 1 }], options));
      const after = controls?.getBoundingClientRect();
      if (before && after?.width && after.height) {
        animations.push(controls.animate([
          { transform: `translate(${before.left - after.left}px, ${before.top - after.top}px)` },
          { transform: 'translate(0, 0)' },
        ], options));
      }
      Promise.all(animations.map((animation) => animation.finished)).then(finish, finish);
      timeout = setTimeout(finish, 430);
    }

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
      if (current?.loading) return `Carregando look B… ${message}`;
      if (current?.error) return `Não foi possível carregar o look B. ${message}`;
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
      if (!reference) return;
      finishComparisonMotion();
      const animate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
        && typeof currentFrame.animate === 'function';
      const before = controls?.getBoundingClientRect();
      const photo = window.photoBounds?.(currentImage);
      const focusAtClose = document.activeElement;
      let snapshot = null;
      if (animate) {
        const rect = referenceFrame.getBoundingClientRect();
        snapshot = referenceFrame.cloneNode(true);
        snapshot.removeAttribute('id');
        snapshot.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'));
        snapshot.className = 'comparison-transition-frame is-comparing';
        snapshot.setAttribute('aria-hidden', 'true');
        snapshot.inert = true;
        Object.assign(snapshot.style, { left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px` });
        document.body.appendChild(snapshot);
      }
      reference = null;
      referenceImage.removeAttribute('src');
      showLook('b');
      renderComparison();
      const complete = () => {
        if (!document.body.classList.contains('view-combinator')
          || !document.getElementById('carousel-overlay').classList.contains('hidden')
          || (document.activeElement !== focusAtClose && document.activeElement !== document.body)) return;
        const focusTarget = start.disabled
          ? layout.querySelector('.is-mobile-active .swatch.active:not([hidden]), .is-mobile-active .layer-option.active') || document.getElementById('view-combinator')
          : start;
        focusTarget.focus({ preventScroll: true });
      };
      if (snapshot) animateComparisonExit(before, photo, snapshot, complete);
      else complete();
    }

    start.addEventListener('click', () => {
      if (!current?.file) return;
      finishComparisonMotion();
      const before = controls?.getBoundingClientRect();
      const photo = window.photoBounds?.(currentImage);
      reference = { ...current };
      referenceImage.src = window.compressedLookSrc(reference.file);
      referenceImage.alt = reference.name;
      showLook('b');
      renderComparison();
      animateComparison(before, photo);
      document.getElementById('btn-end-comparison').focus({ preventScroll: true });
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
      const wasClosing = comparisonMotion?.closing;
      const previousName = current?.name;
      current = event.detail ? { file: event.detail.file, name: event.detail.name || '', loading: !!event.detail.loading, error: !!event.detail.error } : null;
      if (reference && current?.name !== previousName) showLook('b');
      renderComparison();
      if (wasClosing) finishComparisonMotion();
    });
    window.addEventListener('wardrobe:favorites-changed', (event) => {
      favoriteFiles = new Set(event.detail?.files || []);
      saving = !!event.detail?.saving;
      favoriteError = event.detail?.error || '';
      updateReferenceFavorite();
      if (reference && event.detail?.addedFile === reference.file && favoriteFiles.has(reference.file)) {
        window.animateFavoriteButton?.(referenceFavorite);
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !event.defaultPrevented && reference && document.body.classList.contains('view-combinator') && document.getElementById('carousel-overlay').classList.contains('hidden')) {
        event.preventDefault();
        endComparison();
      }
    }, true);
    window.addEventListener('resize', finishComparisonMotion);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) finishComparisonMotion();
    });
    showLook('b');
    renderComparison();
    window.dispatchEvent(new CustomEvent('wardrobe:request-favorites'));
  }
  document.addEventListener('DOMContentLoaded', initComparison);
})();
