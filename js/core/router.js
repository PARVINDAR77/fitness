/**
 * FitLife View Router
 * Coordinates Single-Page Hash Routing & Multi-Page View Navigation
 */

import { state } from './state.js';

class ViewRouter {
  constructor() {
    this.routes = {};
    this.defaultRoute = 'home';
    this.init();
  }

  register(routeName, handler) {
    this.routes[routeName] = handler;
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('DOMContentLoaded', () => this.handleRoute());
  }

  handleRoute() {
    const rawHash = window.location.hash.replace('#', '').trim();
    const [routeName, param] = rawHash.split('/');
    const targetRoute = routeName || this.defaultRoute;

    state.currentView = targetRoute;
    state.dispatch('ROUTE_CHANGED', { route: targetRoute, param });

    // Update active state across desktop navbar and mobile bottom nav
    this.updateActiveNavLinks(targetRoute);

    if (this.routes[targetRoute]) {
      this.routes[targetRoute](param);
    } else if (this.routes[this.defaultRoute]) {
      this.routes[this.defaultRoute]();
    }
  }

  navigateTo(routeWithParam) {
    window.location.hash = routeWithParam;
  }

  updateActiveNavLinks(activeRoute) {
    // Desktop Nav
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href') || '';
      const target = href.replace('#', '').split('/')[0];
      link.classList.toggle('active', target === activeRoute);
    });

    // Mobile Bottom Nav
    document.querySelectorAll('.bottom-nav-item').forEach(link => {
      const href = link.getAttribute('href') || '';
      const target = href.replace('#', '').split('/')[0];
      link.classList.toggle('active', target === activeRoute);
    });
  }
}

export const router = new ViewRouter();
