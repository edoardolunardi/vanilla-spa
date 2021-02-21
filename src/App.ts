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
import "./styles/main.css";

const App = () => {
  const router = new Router([
    { path: "/", view: Index },
    { path: "/about", view: About },
    { path: "/articles/:id", view: Article },
    { path: "/404", view: NotFound },
  ]);

  const preload = Preload({ preloader: document.querySelector(".preloader") });

  const cursor = Cursor({ el: document.querySelector(".cursor") });

  preload.preloadImages().then(() => {
    preload.removePreloader();
  });

  router.on("routeChangeEnd", () => {
    cursor.attachEventsToLinks();
  });
}

App();
