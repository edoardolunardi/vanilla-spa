import Index from "./pages/Index";
import About from "./pages/About";
import Article from "./templates/Article";
import NotFound from "./pages/NotFound";

import Router from "./Router";

import "./styles/main.scss";

class App {
  router: Router;

  constructor() {
    // Router will be responsible of handling client side routes, injecting the correct data for every route and page transitions
    this.router = new Router([
      { path: "/", view: Index },
      { path: "/about", view: About },
      { path: "/articles/:id", view: Article },
      { path: "/404", view: NotFound },
    ]);
  }
}

new App();
