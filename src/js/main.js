import menuData from '../menu.json';
import menuTemplate from '../templates/card.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let uiTheme = localStorage.getItem('ui-theme');
if (!uiTheme) {
  uiTheme = Theme.LIGHT;
  localStorage.setItem('ui-theme', Theme.LIGHT);
}

const body = document.getElementsByTagName('body')[0];
const changeThemeCheckbox = document.getElementById('theme-switch-toggle');
const menu = document.querySelector('.js-menu');

body.classList.add(uiTheme);
changeThemeCheckbox.checked = uiTheme === Theme.LIGHT ? false : true;

const markup = menuTemplate(menuData);
menu.insertAdjacentHTML('beforeend', markup);

changeThemeCheckbox.addEventListener('click', onChangeTheme);

function onChangeTheme(event) {
  body.classList.toggle(Theme.DARK);
  body.classList.toggle(Theme.LIGHT);
  localStorage.setItem('ui-theme', event.target.checked ? Theme.DARK : Theme.LIGHT);
}
