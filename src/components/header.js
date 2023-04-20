import searchIcon from '../assets/icons/searchIcon.js';

import './headerNav.js';

export const Header = () => `
  <nav
    class="navbar navbar-expand-lg fixed-top border-bottom"
  >
    <div class="container-fluid p-0">
      <top-navi></top-navi>
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
      <div class="navbar-collapse expand justify-content-between" id="navbarCollapse">
        <ul class="navbar-nav gap-2 me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link py-0 active-sidebar" aria-current="page" href="/photos">Photos</a>
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
          <button type="button" class="btn my-auto ps-0 pe-0" data-btn="signin">
            Sign in
          </button>
        </div>
      </div>
    </div>
  </nav>
`;

// const iconsClasses = {
//   allResourses: 'active-sidebar-icon',
//   selfie: 'active-sidebar-selfie-icon',
//   recent: 'active-sidebar-recent-icon',
//   deleted: 'active-sidebar-icon',
// };

// window.addEventListener('DOMContentLoaded', () => {
//   const linksList = document.querySelectorAll('[data-icon]');

//   linksList[0].classList.add('active-sidebar-icon');

//   linksList.forEach((link) =>
//     link.addEventListener('click', (e) => {
//       e.preventDefault();

//       linksList.forEach((tab) => {
//         if (
//           tab.classList.contains('active-sidebar-recent-icon') ||
//           tab.classList.contains('active-sidebar-icon') ||
//           tab.classList.contains('active-sidebar-selfie-icon')
//         ) {
//           tab.classList.remove(
//             'active-sidebar-recent-icon',
//             'active-sidebar-icon',
//             'active-sidebar-selfie-icon'
//           );
//         }
//       });

//       link.classList.add(iconsClasses[e.currentTarget.name]);
//     })
//   );
// });
