import { gsap } from "gsap";
import { lerp } from "../utils/common";

interface Props {
  el: HTMLElement
}

const Cursor = ({ el }: Props) => {
  const cursor = el;

  const bounds = cursor.getBoundingClientRect();

  const renderedStyles = {
    x: 0,
    y: 0,
  }

  const pos = {
    clientX: window.innerHeight / 2,
    clientY: window.innerHeight / 2
  }

  gsap.set(cursor, { opacity: 0 });

  const onMouseMove = (e: MouseEvent) => {
    gsap.set(cursor, { opacity: 1 });
    pos.clientX = e.clientX - bounds.width / 2;
    pos.clientY = e.clientY - bounds.height / 2;
  }

  const enter = () => {
    gsap.to(cursor, { scale: 2.5 })
  }

  const leave = () => {
    gsap.to(cursor, { scale: 1 })
  }

  const renderCursor = () => {
    renderedStyles.x = lerp(renderedStyles.x, pos.clientX, 0.2);
    renderedStyles.y = lerp(renderedStyles.y, pos.clientY, 0.2);
    gsap.set(cursor, { x: renderedStyles.x, y: renderedStyles.y });
    requestAnimationFrame(renderCursor);
  }

  const attachEventsToLinks = () => {
    [...document.querySelectorAll("a")].forEach((link) => {
      link.addEventListener("mouseenter", enter);
      link.addEventListener("mouseleave", leave);
    });
  }

  attachEventsToLinks();

  requestAnimationFrame(() => renderCursor());

  window.addEventListener("mousemove", (e) => onMouseMove(e));

  return { attachEventsToLinks }
}

export default Cursor;
