const configuredDialogs = new WeakSet();
const returnFocus = new WeakMap();

document.querySelectorAll('[data-figure-viewer]').forEach((link) => {
  const dialog = document.getElementById(link.getAttribute('data-figure-viewer'));
  const closeButton = dialog?.querySelector('.figure-viewer-close');
  const demoImage = dialog?.querySelector('[data-demo-src]');
  const galleryImage = dialog?.querySelector('[data-gallery-image]');
  if (!dialog || !closeButton || typeof dialog.showModal !== 'function') return;

  link.addEventListener('click', (event) => {
    event.preventDefault();
    returnFocus.set(dialog, link);
    if (galleryImage) {
      galleryImage.alt = link.querySelector('img')?.alt || '';
      galleryImage.src = link.getAttribute('href');
    }
    dialog.showModal();
    if (demoImage) demoImage.src = demoImage.getAttribute('data-demo-src');
  });

  if (configuredDialogs.has(dialog)) return;
  configuredDialogs.add(dialog);

  closeButton.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog &&
        (event.clientX < bounds.left || event.clientX > bounds.right ||
         event.clientY < bounds.top || event.clientY > bounds.bottom)) {
      dialog.close();
    }
  });

  dialog.addEventListener('close', () => {
    if (demoImage) demoImage.removeAttribute('src');
    if (galleryImage) galleryImage.removeAttribute('src');
    returnFocus.get(dialog)?.focus();
  });
});
