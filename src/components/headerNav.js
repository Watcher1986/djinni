import allResoursesIcon from '../assets/icons/allResoursesIcon';
import basketIcon from '../assets/icons/basketIcon';
import recentIcon from '../assets/icons/recentIcon';
import selfieIcon from '../assets/icons/selfieIcon';

const iconsClasses = {
  allResourses: 'active-sidebar-icon',
  selfie: 'active-sidebar-selfie-icon',
  recent: 'active-sidebar-recent-icon',
  deleted: 'active-sidebar-icon',
};

class HeaderNavbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <nav class="d-none gap-4" data-box="mobro">
        <a data-icon="sidebar" name="allResourses">${allResoursesIcon()}</a>
        <a data-icon="sidebar" name="selfie">${selfieIcon()}</a>
        <a data-icon="sidebar" name="recent">${recentIcon()}</a>
        <a data-icon="sidebar" name="deleted">${basketIcon()}</a>
      </nav>
    `;

    const linksList = document.querySelectorAll('[data-icon="sidebar"]');

    linksList[0].classList.add('active-sidebar-icon');

    linksList.forEach((link) =>
      link.addEventListener('click', (e) => {
        e.preventDefault();

        linksList.forEach((tab) => {
          if (
            tab.classList.contains('active-sidebar-recent-icon') ||
            tab.classList.contains('active-sidebar-icon') ||
            tab.classList.contains('active-sidebar-selfie-icon')
          ) {
            tab.classList.remove(
              'active-sidebar-recent-icon',
              'active-sidebar-icon',
              'active-sidebar-selfie-icon'
            );
          }
        });

        link.classList.add(iconsClasses[e.currentTarget.name]);
      })
    );
  }
}

window.customElements.define('top-nav', HeaderNavbar);
