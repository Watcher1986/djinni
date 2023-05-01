import './headerNav';
import './toggleTheme';

import searchIcon from '../assets/icons/searchIcon.js';

const headerTemplate = `
  <nav
    class="navbar navbar-expand-lg fixed-top border-bottom"
  >
    <div class="container-fluid p-0">
      <top-nav></top-nav>
      <button
        class="navbar-toggler collapsed my-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse justify-content-between" id="navbarCollapse">
        <ul class="navbar-nav gap-2 me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link py-0" name='photos' data-link="topnav" aria-current="page" href="/photos">Photos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-0" name='videos' data-link="topnav" href="/videos">Videos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-0" name='podcasts' data-link="topnav" href="/podcasts">Podcasts</a>
          </li>
        </ul>
        <div class="d-flex flex-row gap-2" data-control="control">
          <form
            role="input"
            class="input-group me-2"
            data-form="search-form"
          >
            <span
              class="position-absolute lh-0 top-50 translate-middle-y"
              data-icon="search"
            >
              ${searchIcon()}
            </span>
            <input
              class="form-control rounded-pill p-10"
              type="search"
              placeholder="Search for anything..."
              aria-label="Search"
              data-input="search"
            />
          </form>
          <select
            class="form-select border-0 my-auto me-2 ps-0"
            aria-label="Default select example"
            data-select="lang"
            >
            <option selected>English</option>
            <option value="1">Ukrainian</option>
            <option value="2">German</option>
            <option value="3">French</option>
          </select>
          <button type="button" class="btn my-auto ps-0 pe-0 me-2" data-btn="signin">
            Sign in
          </button>
          <toggle-theme class="my-auto"></toggle-theme>
        </div>
      </div>
    </div>
  </nav>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = headerTemplate;

    const menuBtn = this.querySelector('.navbar-toggler');
    const expandMenu = this.querySelector('#navbarCollapse');

    menuBtn.addEventListener('click', () => {
      const menuClassesList = expandMenu.classList;

      if (menuClassesList.contains('collapse')) {
        menuClassesList.remove('collapse');
        menuClassesList.add('expand');
      } else if (menuClassesList.contains('expand')) {
        menuClassesList.remove('expand');
        menuClassesList.add('collapse');
      }
    });
  }
}

window.customElements.define('app-header', Header);
