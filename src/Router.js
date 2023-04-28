import { AppLayout } from './layout/appLayout';

// Implement the Router class
export default class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentRoute = null;
    this.view = document.querySelector('body');
    this.viewContainer = null;
    this.init();
  }

  init() {
    window.addEventListener('popstate', (e) => {
      e.preventDefault();
      const url = e?.state?.url || window.location.pathname;
      this.routeTo(url);
    });
    this.routeTo(window.location.pathname);
  }

  async initLayout() {
    this.view.innerHTML = await AppLayout();
    this.viewContainer = document.querySelector('[data-box="content"]');
  }

  setActiveNavLink(url) {
    const links = document.querySelectorAll('[data-link="topnav"]');
    const path = url === '/' ? '/photos' : url;

    links.forEach((link) => {
      if (link.href.includes(path)) {
        link.classList.add('active-sidebar');
      } else {
        link.classList.remove('active-sidebar');
      }
    });
  }

  async routeTo(url) {
    const route = this.matchRoute(url);

    if (!route) {
      const component = new this.routes['404']();
      this.view.innerHTML = await component.render();

      this.currentRoute = null;
      this.viewContainer = null;
      return;
    }
    const params = this.extractParams(route, url);

    if (!this.viewContainer) await this.initLayout();

    const component = new this.routes[route]({
      params,
      container: this.viewContainer,
    });

    this.setActiveNavLink(url);
    await component.render();

    this.currentRoute = { route, component, params };
  }

  matchRoute(url) {
    // Loop through routes and check for matches
    for (let route in this.routes) {
      const pattern = new RegExp(`^${route.replace(/:\w+/g, '(\\w+)')}$`);
      const matches = url.match(pattern);

      if (matches) {
        return matches[0];
      }
    }

    // No match found
    return undefined;
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
    const path = new URL(url);

    history.pushState({ url: path.pathname }, null, path.pathname);
    this.routeTo(path.pathname);
  }
}
