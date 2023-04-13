import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../scss/styles.scss';

import searchIcon from '../../public/assets/icons/searchIcon.js';
import recentIcon from '../../public/assets/icons/recentIcon.js';
import allResoursesIcon from '../../public/assets/icons/allResoursesIcon.js';
import selfieIcon from '../../public/assets/icons/selfieIcon.js';
import basketIcon from '../../public/assets/icons/basketIcon.js';

const header = document.querySelector('header');

header.innerHTML = `
<nav
class="navbar navbar-expand-lg fixed-top bg-white border-bottom"
>
<div class="container-fluid">
  <nav class="d-none gap-4" data-box="mobro">
    <span
      data-icon="sidebar"
    >
      ${allResoursesIcon()}
    </span>
    <span 
      data-icon="sidebar"
    >
      ${selfieIcon()}
    </span>
    <span 
      data-icon="sidebar">${recentIcon()}</span>
    <span 
      data-icon="sidebar"
    >
      ${basketIcon()}
    </span>
  </nav>
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
        <a class="nav-link py-0 active" aria-current="page" href="#">Photos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link py-0" href="#">Videos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link py-0" href="#">Podcasts</a>
      </li>
    </ul>
    <div class="d-flex flex-row gap-2" data-control="control">
      <form
        role=""
        class="input-group me-4"
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
      <button type="button" class="btn my-auto ps-0" data-btn="signin">
        Sign in
      </button>
    </div>
  </div>
</div>
</nav>
`;

const container = document.getElementById('app');

container.innerHTML = `
  <div class="container py-4 px-3 m-auto">
    <h1>Hello, Bootstrap and Webpack!</h1>
    <button class="btn btn-primary">Primary button</button>
  </div>
`;
