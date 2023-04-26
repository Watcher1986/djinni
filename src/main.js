import './scss/styles.scss';

import Router from './Router';

import PhotosView from './views/PhotosPage';
import VideosView from './views/VideosPage';
import PodcastsView from './views/PodcastsPage';
import ErrorPage from './views/404';

const routes = {
  '/': PhotosView,
  '/photos': PhotosView,
  '/videos': VideosView,
  '/podcasts': PodcastsView,
  404: ErrorPage,
};

const router = new Router(routes);

window.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.matches('[data-link="topnav"]')) {
    router.navigateTo(e.target.href);
  } else if (e.target.matches('#err-redirect')) {
    router.navigateTo(e.target.href);
  }

  return;
});

// window.addEventListener('DOMContentLoaded', (e) => {
//   const navLinks = e.target.querySelectorAll('[data-link="topnav"]');

//   console.log(navLinks);

//   const path =
//     window.location.pathname === '/' ? '/photos' : window.location.pathname;

//   navLinks.forEach((link) => {
//     if (link.getAttribute('href') === path) {
//       link.classList.add('active-sidebar');
//     }
//   });
// });
