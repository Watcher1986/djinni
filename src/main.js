import './scss/styles.scss';

import Router from './Router';

import PhotosView from './views/PhotosPage/index.js';
import ErrorPage from './views/404';

const routes = {
  '/': PhotosView,
  '/photos': PhotosView,
  '/photos/:slug': PhotosView,
  '/videos': PhotosView,
  '/videos/:slug': PhotosView,
  '/podcasts': PhotosView,
  '/podcasts/:slug': PhotosView,
  404: ErrorPage,
};

const router = new Router(routes);

window.addEventListener('click', (e) => {
  const navLinks = document.querySelectorAll('[data-link="topnav"]');

  const url = window.location.pathname;

  console.log(url);

  if (e.target.matches('[data-link="topnav"]')) {
    e.preventDefault();

    navLinks.forEach((link) => {
      if (link.classList.contains('active-sidebar'))
        link.classList.remove('active-sidebar');
    });

    router.navigateTo(e.target.href);
    e.target.classList.add('active-sidebar');
  }
  return;
});

// const currentUrl = window.location.pathname;
// router.routeTo(currentUrl);

// window.addEventListener('DOMContentLoaded', () => {
//   const router = new Router(routes);

//   const currentUrl = window.location.pathname;
//   router.routeTo(currentUrl);
// });

import matchRoute from './helpers/matchRoute.js';
// // import { AppLayout } from './layout/appLayout.js';

// // document.querySelector('body').innerHTML = await AppLayout();

// const render = async (html) => {
//   const body = document.querySelector('body');
//   if (body) body.innerHTML = await html.getHtml();
// };

// const handleRouteChange = () => {
//   const matchedRoute = matchRoute(window.location.pathname, routes);
//   console.log(matchedRoute, window.location.pathname);
//   if (matchedRoute) {
//     render(matchedRoute);
//   } else {
//     console.error(`No matching route found for ${window.location.pathname}`);
//     render(routes['404']);
//   }
// };

// window.addEventListener('popstate', handleRouteChange);

// window.addEventListener('DOMContentLoaded', handleRouteChange);

// import PhotosView from './views/PhotosPage/index.js';
// import ErrorPage from './views/404';

// const pathToRegex = (path) =>
//   new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

// const getParams = (match) => {
//   const values = match.result.slice(1);
//   const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
//     (result) => result[1]
//   );

//   return Object.fromEntries(
//     keys.map((key, i) => {
//       return [key, values[i]];
//     })
//   );
// };

// const navigateTo = (url) => {
//   history.pushState(null, null, url);
//   router();
// };

// const router = async () => {
//   const routes = [
//     { path: '/', view: PhotosView },
//     { path: '/photos', view: PhotosView },
//     { path: '/photos/:slug', view: PhotosView },
//     { path: '/videos', view: PhotosView },
//     { path: '/podcasts', view: PhotosView },
//     { path: '404', view: ErrorPage },
//   ];

//   // Test each route for a potential match
//   const potentialMatches = routes.map((route) => {
//     return {
//       route: route,
//       result: location.pathname.match(pathToRegex(route.path)), // window.location.pathname property returns the pathname of the current page
//     };
//   });

//   let match = potentialMatches.find(
//     (potentialMatch) => potentialMatch.result !== null
//   );

//   if (!match) {
//     match = {
//       route: routes[routes.length - 1],
//       result: [location.pathname],
//     };
//   }

//   const params = getParams(match);

//   const view = new match.route.view(params);

//   console.log(potentialMatches, params, match);

//   document.querySelector('body').innerHTML = await view.getHtml();
// };

// window.addEventListener('popstate', router);

// window.addEventListener('DOMContentLoaded', () => {
//   document.body.addEventListener('click', (e) => {
//     if (e.target.matches('[data-link]')) {
//       e.preventDefault();
//       navigateTo(e.target.href);
//     }
//   });
//   router();
// });
