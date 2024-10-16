function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return 'dark';
  }

  return 'light';
}

function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  buttonEl.setAttribute('aria-label', newCta);
  buttonEl.setAttribute('title', newCta);
}

function updateThemeOnHtmlEl({ theme }) {
  document.querySelector('html').setAttribute('data-theme', theme);
}

const button = document.querySelector('[data-theme-switch]');
const localStorageTheme = localStorage.getItem('theme');
const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)');

let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

updateButton({ buttonEl: button, isDark: currentThemeSetting === 'dark' });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

button.addEventListener('click', event => {
  const newTheme = currentThemeSetting === 'dark' ? 'light' : 'dark';

  localStorage.setItem('theme', newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === 'dark' });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});

const openMenuBtn = document.querySelector('.open-menu-btn');
const mobileMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-link');

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-open');
  openMenuBtn.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    openMenuBtn.classList.remove('active');
  });
});
