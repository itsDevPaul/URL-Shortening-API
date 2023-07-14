import './style.css'

//Mobile navigation toggle
const navToggle = document.querySelector('#nav-toggle');
const navWrapper = document.querySelector('#nav-wrapper');

navToggle.addEventListener('click', () => {
  if (navWrapper.classList.contains('hidden')) {
    navToggle.setAttribute('aria-expanded', true);
  } else {
    navToggle.setAttribute('aria-expanded', false);
  }

  navWrapper.classList.toggle('hidden');
});

