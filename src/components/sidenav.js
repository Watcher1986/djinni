import allResoursesIcon from '../assets/icons/allResoursesIcon';
import basketIcon from '../assets/icons/basketIcon';
import recentIcon from '../assets/icons/recentIcon';
import selfieIcon from '../assets/icons/selfieIcon';

const iconsClasses = {
  allResourses: 'active-nav-icon',
  selfie: 'active-selfie-icon',
  recent: 'active-recent-icon',
  deleted: 'active-nav-icon',
};

const sidenavTemplate = `
  <div class="position-relative py-2 rounded-3" data-tab="sidenav">
    <a class="nav-link fw-bolder" href="${
      location.pathname.split('/')[1]
    }" name="allResourses" data-link="sidenav"><span class="position-absolute lh-0 top-50 translate-middle-y" data-icon="sidenav">${allResoursesIcon()}</span>All photos</a>
  </div>
  <div class="position-relative py-2 rounded-3" data-tab="sidenav">
    <a class="nav-link fw-bolder" href=${`/
      ${location.pathname.split('/')[1]}/selfies
    `} name="selfie" data-link="sidenav"><span class="position-absolute lh-0 top-50 translate-middle-y" style="left: 9px" data-icon="sidenav">${selfieIcon()}</span>Selfies</a>
  </div>
  <div class="position-relative py-2 rounded-3" data-tab="sidenav">
    <a class="nav-link fw-bolder" name="recent" data-link="sidenav"><span class="position-absolute lh-0 top-50 translate-middle-y" data-icon="sidenav">${recentIcon()}</span>Recent</a>
  </div>
  <div class="position-relative py-2 rounded-3" data-tab="sidenav">
    <a class="nav-link fw-bolder" name="deleted" data-link="sidenav"><span class="position-absolute lh-0 top-50 translate-middle-y" data-icon="sidenav">${basketIcon()}</span>Deleted</a>
  </div>
`;

class SideNavbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = sidenavTemplate;

    const linksList = this.querySelectorAll('[data-link=sidenav]');
    const tabsList = this.querySelectorAll('[data-tab=sidenav]');

    tabsList[0].classList.add('active-nav-icon');

    linksList.forEach((link) =>
      link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        tabsList.forEach((tab) => {
          if (
            tab.classList.contains('active-recent-icon') ||
            tab.classList.contains('active-nav-icon') ||
            tab.classList.contains('active-selfie-icon')
          ) {
            tab.classList.remove(
              'active-recent-icon',
              'active-nav-icon',
              'active-selfie-icon'
            );
          }
        });

        link.parentElement.classList.add(iconsClasses[e.currentTarget.name]);
      })
    );
  }
}

window.customElements.define('side-navbar', SideNavbar);
