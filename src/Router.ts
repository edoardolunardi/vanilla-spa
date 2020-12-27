/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from "lit-html";
import { gsap } from "gsap";
import { isInternalRoute, pathToRegex, getUrlParams } from "./utils";
import EventEmitter from "./components/EventEmitter";

type View = any;

interface Route {
  path: string;
  view: View;
}

interface Match {
  route: Route;
  result: RegExpMatchArray;
}

class Router extends EventEmitter {
  root: HTMLDivElement;
  activeView: View;
  matches: Match[];
  match: Match;
  routes: Route[];
  links: HTMLAnchorElement[];
  firstLoad: boolean;

  constructor(routes: Route[]) {
    super();
    this.routes = routes;

    this.firstLoad = true;

    // App root
    this.root = document.querySelector("#app");

    // Call matchRoute on page load
    this.matchRoute();

    window.addEventListener("popstate", () => this.matchRoute());
  }

  matchRoute(): void {
    // Starting route change
    this.emit("routeChangeStart");

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

    if (this.firstLoad) {
      this.done();
    } else {
      gsap.set(this.root, { pointerEvents: "none" });
      gsap.set(document.body, { overflow: "hidden" });
      gsap.to(this.root, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          // Call done when the animation is completed and the new content is ready to be rendered
          this.done();
        },
      });
    }

    this.firstLoad = false;
  }

  done(): void {
    render(this.activeView.render(), this.root);

    if (this.firstLoad) {
      this.linksHandler();
      this.emit("routeChangeEnd");
    } else {
      window.scrollTo(0, 0);
      gsap.fromTo(
        this.root,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          onComplete: () => {
            this.linksHandler();
            gsap.set(this.root, { pointerEvents: "auto" });
            gsap.set(document.body, { overflow: "auto" });
            // Ending route change
            this.emit("routeChangeEnd");
          },
        }
      );
    }

    this.firstLoad = false;
  }
}

export default Router;
