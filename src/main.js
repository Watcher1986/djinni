// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './scss/styles.scss';

import routes from './routes.js';

import matchRoute from './helpers/matchRoute.js';
// import { AppLayout } from './layout/appLayout.js';

// document.querySelector('body').innerHTML = await AppLayout();

const render = async (html) => {
  const body = document.querySelector('body');
  if (body) body.innerHTML = await html;
};

const handleRouteChange = () => {
  const matchedRoute = matchRoute(window.location.pathname, routes);
  if (matchedRoute) {
    render(matchedRoute);
  } else {
    console.error(`No matching route found for ${window.location.pathname}`);
    render(routes['404']);
  }
};

window.addEventListener('popstate', handleRouteChange);

window.addEventListener('DOMContentLoaded', handleRouteChange);

const navBtn = document.querySelector('#navbarCollapse');
navBtn.addEventListener('click', (e) => {
  console.log(e);
});

// const iconsClasses = {
//   allResourses: 'active-nav-icon',
//   selfie: 'active-selfie-icon',
//   recent: 'active-recent-icon',
//   deleted: 'active-nav-icon',
// };

// window.addEventListener('DOMContentLoaded', () => {
//   handleRouteChange();
//   const linksList = document.querySelectorAll('[data-link]');
//   const tabsList = document.querySelectorAll('[data-tab]');

//   console.log(tabsList, linksList);

//   tabsList[0].classList.add('active-nav-icon');

//   linksList.forEach((link) =>
//     link.addEventListener('click', (e) => {
//       e.preventDefault();

//       tabsList.forEach((tab) => {
//         if (
//           tab.classList.contains('active-recent-icon') ||
//           tab.classList.contains('active-nav-icon') ||
//           tab.classList.contains('active-selfie-icon')
//         ) {
//           tab.classList.remove(
//             'active-recent-icon',
//             'active-nav-icon',
//             'active-selfie-icon'
//           );
//         }
//       });

//       link.parentElement.classList.add(iconsClasses[e.currentTarget.name]);
//     })
//   );
// });
