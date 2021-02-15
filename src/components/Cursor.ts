import { gsap } from "gsap";
import { lerp } from "../utils";

class Cursor {
  cursor: HTMLElement;

  bounds: ClientRect;

  renderedStyles: {
    x: number;
    y: number;
    scale: number;
  };

  pos: {
    clientX: number;
    clientY: number;
  };

  constructor(cursor: HTMLElement) {
    this.cursor = cursor;

    this.bounds = this.cursor.getBoundingClientRect();

    this.renderedStyles = {
      x: 0,
      y: 0,
      scale: 1,
    };

    this.pos = {
      clientX: 0,
      clientY: 0,
    };

    gsap.set(this.cursor, { opacity: 0 });

    this.renderCursor = this.renderCursor.bind(this);

    requestAnimationFrame(() => this.renderCursor());

    this.attachEventsToLinks();

    window.addEventListener("mousemove", (e) => this.onMouseMove(e));
  }

  onMouseMove(e: MouseEvent): void {
    gsap.set(this.cursor, { opacity: 1 });

    this.pos.clientX = e.clientX - this.bounds.width / 2;

    this.pos.clientY = e.clientY - this.bounds.height / 2;
  }

  renderCursor(): void {
    this.renderedStyles.x = lerp(this.renderedStyles.x, this.pos.clientX, 0.2);

    this.renderedStyles.y = lerp(this.renderedStyles.y, this.pos.clientY, 0.2);

    gsap.set(this.cursor, { x: this.renderedStyles.x, y: this.renderedStyles.y, scale: this.renderedStyles.scale });

    requestAnimationFrame(this.renderCursor);
  }

  enter(): void {
    this.renderedStyles.scale = 2.5;
  }

  leave(): void {
    this.renderedStyles.scale = 1;
  }

  attachEventsToLinks(): void {
    [...document.querySelectorAll("a")].forEach((link) => {
      link.addEventListener("mouseenter", () => this.enter());
      link.addEventListener("mouseleave", () => this.leave());
    });
  }
}

export default Cursor;
