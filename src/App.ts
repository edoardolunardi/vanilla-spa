// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Article from "./templates/Article";
import NotFound from "./pages/NotFound";

// Router
import Router from "./Router";

// Components
import Cursor from "./components/Cursor";

// Global style
import "./styles/main.scss";

class App {
  router: Router;
  cursor: Cursor;

  constructor() {
    // Router will be responsible of handling client side routes, injecting the correct data for every route and page transitions
    this.router = new Router([
      { path: "/", view: Index },
      { path: "/about", view: About },
      { path: "/articles/:id", view: Article },
      { path: "/404", view: NotFound },
    ]);

    this.cursor = new Cursor(document.querySelector(".cursor"));

    this.router.addEventListener("routeChangeEnd", () => {
      this.cursor.attachEventsToLinks();
    });
  }
}

new App();
