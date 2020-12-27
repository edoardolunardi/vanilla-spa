import { Sm00thScroll } from "sm00th-scroll";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Article from "./templates/Article";
import NotFound from "./pages/NotFound";

// Router
import Router from "./Router";

// Components
import Preload from "./components/Preload";
import Cursor from "./components/Cursor";

// Global style
import "./styles/main.scss";

class App {
  router: Router;
  cursor: Cursor;
  preload: Preload;
  scroll: Sm00thScroll;

  constructor() {
    // Router will be responsible of handling client side routes, injecting the correct data for every route and page transitions
    this.router = new Router([
      { path: "/", view: Index },
      { path: "/about", view: About },
      { path: "/articles/:id", view: Article },
      { path: "/404", view: NotFound },
    ]);

    this.preload = new Preload(document.querySelector(".preloader"));

    this.cursor = new Cursor(document.querySelector(".cursor"));

    this.scroll = new Sm00thScroll({ disableOverflowBehaviorX: true, disableOverflowBehaviorY: true });

    this.preload.preloadImages().then(() => {
      this.preload.removePreloader();

      this.scroll.refresh();
    });

    this.router.on("routeChangeEnd", () => {
      this.cursor.attachEventsToLinks();

      this.scroll.refresh();
    });
  }
}

new App();
