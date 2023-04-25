// import PhotosView from './views/PhotosPage/index.js';
// import ErrorPage from './views/404';

// // Define your routes
// const routes = {
//   '/': PhotosView,
//   '/users': Users,
//   '/users/:id': User,
//   '/users/:id/profile': UserProfile,
//   '/users/:id/settings': UserSettings,
// };

// Implement the Router class
export default class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentRoute = null;
    this.init();
    this.notFound();
    this.view;
  }

  init() {
    this.view = document.querySelector('body');
    window.addEventListener('popstate', (e) => {
      e.preventDefault();
      const url = e?.state?.url || window.location.pathname;
      this.routeTo(url);
    });
    this.routeTo(window.location.pathname);
  }

  async notFound() {
    const component = new this.routes['404']();
    if (this.currentRoute === null) {
      this.view.innerHTML = await component.getHtml();
    }
  }

  async routeTo(url) {
    const route = this.matchRoute(url);
    if (!route) {
      this.currentRoute = null;
      return;
    }
    const params = this.extractParams(route, url);
    const component = new this.routes[route](params);
    this.view.innerHTML = await component.getHtml();
    this.currentRoute = { route, component, params };
  }

  matchRoute(url) {
    const matchingRoutes = Object.keys(this.routes).filter((route) => {
      const regex = new RegExp(`^${route.replace(/:[^\s/]+/g, '([\\w-]+)')}$`);
      return regex.test(url);
    });
    return matchingRoutes[0];
  }

  extractParams(route, url) {
    const params = {};
    const routeParts = route.split('/');
    const urlParts = url.split('/');
    routeParts.forEach((part, i) => {
      if (part.startsWith(':')) {
        const key = part.slice(1);
        const val = urlParts[i];
        params[key] = val;
      }
    });
    return params;
  }

  navigateTo(url) {
    history.pushState({ url }, null, url);
    this.routeTo(url);
  }
}
