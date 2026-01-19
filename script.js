  const grid = document.getElementById('grid');

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;

    const alreadyOpen = card.classList.contains('is-open');
    grid.querySelectorAll('.card.is-open').forEach(c => c.classList.remove('is-open'));

    if (!alreadyOpen) card.classList.add('is-open');

    grid.classList.toggle('has-open', !!grid.querySelector('.card.is-open'));
  });

  // close on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    grid.querySelectorAll('.card.is-open').forEach(c => c.classList.remove('is-open'));
    grid.classList.remove('has-open');
  });