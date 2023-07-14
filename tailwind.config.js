/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ['./index.html', './main.js'],
  theme: {
    colors: {
      'cyan': 'var(--color-primary-cyan)',
      'dark-violet': 'var(--color-primary-dark-violet)',
      'red': 'var(--color-secondary-red)',
      'light-gray': 'var(--color-neutral-light-gray)',
      'gray': 'var(--color-neutral-gray)',
      'grayish-violet': 'var(--color-neutral-grayish-violet)',
      'very-dark-blue': 'var(--color-neutral-very-dark-blue)',
      'dark-blue': 'var(--color-neutral-dark-blue)',
      'dark-violet': 'var(--color-neutral-very-dark-violet)',
      white: 'var(--color-neutral-white)',
    },
    extend: {
      fontWeight: {
        'medium': 'var(--font-weight-medium)',
        'bold': 'var(--font-weight-bold)',
      },
      gridTemplateColumns: {
        'form': '78% 1fr',
      },
      backgroundImage: theme => ({
        'shorten-mobile': "url('/images/bg-shorten-mobile.svg')",
        'shorten-desktop': "url('/images/bg-shorten-desktop.svg')",
        'boost-mobile': "url('/images/bg-boost-mobile.svg')",
        'boost-desktop': "url('/images/bg-boost-desktop.svg')",
      }),
      backgroundPosition: {
        'left-4-bottom-2': 'left 4rem bottom 2rem',
      },
    },
  },
  plugins: [],
};
