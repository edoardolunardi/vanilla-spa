/* eslint-disable @typescript-eslint/no-explicit-any */
import { EventTarget } from "event-target-shim";
import { render } from "lit-html";
import { gsap } from "gsap";
import { isInternalRoute, pathToRegex, getUrlParams } from "./utils";

type View = any;

interface Route {
  path: string;
  view: View;
}

interface Match {
  route: Route;
  result: RegExpMatchArray;
}

class Router extends EventTarget {
  root: HTMLDivElement;
  activeView: View;
  matches: Match[];
  match: Match;
  routes: Route[];
  links: HTMLAnchorElement[];
  routeChangeStart: Event;
  routeChangeEnd: Event;

  constructor(routes: Route[]) {
    super();

    this.routes = routes;

    // App root
    this.root = document.querySelector("#app");

    // Create new event
    this.routeChangeStart = new Event("routeChangeStart");
    this.routeChangeEnd = new Event("routeChangeEnd");

    // Bind functions that are used in event listeners
    this.matchRoute = this.matchRoute.bind(this);

    // Call matchRoute on page load
    this.matchRoute();

    window.addEventListener("popstate", this.matchRoute);
  }

  matchRoute(): void {
    // Starting route change
    this.dispatchEvent(this.routeChangeStart);

    this.matches = this.routes.map((route) => ({
      route: route,
      result: window.location.pathname.match(pathToRegex(route.path)),
    }));

    this.match = this.matches.find((match) => match.result !== null);

    if (!this.match) {
      this.match = {
        route: this.routes[this.routes.length - 1],
        result: [window.location.pathname],
      };
    }

    this.in();
  }

  navigateTo(url: string): void {
    history.pushState(null, null, url);
    this.matchRoute();
  }

  linksHandler(): void {
    // Every internal link in the page
    this.links = [...document.querySelectorAll("a")].filter((link) => isInternalRoute(link.getAttribute("href")));

    this.links.forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.navigateTo(link.getAttribute("href"));
      })
    );
  }

  // Mount the new route
  in(): void {
    this.activeView = new this.match.route.view(getUrlParams(this.match));
    gsap.set(this.root, { pointerEvents: "none" });

    gsap.to(this.root, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        // Call done when the animation is completed and the new content is ready to be rendered
        this.done();
      },
    });
  }

  done(): void {
    render(this.activeView.render(), this.root);

    gsap.fromTo(
      this.root,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        onComplete: () => {
          this.linksHandler();
          gsap.set(this.root, { pointerEvents: "auto" });
          // Ending route change
          this.dispatchEvent(this.routeChangeEnd);
        },
      }
    );
  }
}

export default Router;
