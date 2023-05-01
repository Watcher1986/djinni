import darkThemeIcon from '../assets/icons/darkThemeIcon';
import lightThemeIcon from '../assets/icons/lightThemeIcon';

export default class ToggleAppTheme extends HTMLElement {
  constructor() {
    super();

    this.theme = JSON.parse(localStorage.getItem('client-theme')) || '';

    this.innerHTML = `
      <button type="button" class="p-0" data-btn="toggle-theme"></button>
    `;

    this.toggleBtn = this.querySelector('[data-btn="toggle-theme"]');
    this.toggleBtn.innerHTML = !this.theme ? darkThemeIcon : lightThemeIcon;
    this.toggleBtn.addEventListener('click', () => this.toggleTheme());
  }

  toggleTheme() {
    this.theme = !this.theme ? 'dark-theme' : '';
    if (document.body.classList.length) {
      document.body.classList.remove('dark-theme');
      this.toggleBtn.innerHTML = darkThemeIcon;
    } else {
      document.body.classList.add('dark-theme');
      this.toggleBtn.innerHTML = lightThemeIcon;
    }
    localStorage.setItem('client-theme', JSON.stringify(this.theme));
  }
}

window.customElements.define('toggle-theme', ToggleAppTheme);
