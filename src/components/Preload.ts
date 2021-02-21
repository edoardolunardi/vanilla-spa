/* eslint-disable @typescript-eslint/no-explicit-any */
import ImagesLoaded from "imagesloaded";
import { gsap } from "gsap";

interface Props {
  preloader: HTMLElement;
}

const Preload = ({ preloader }: Props) => {
  document.documentElement.style.setProperty("--loading-progress", "0%");

  const preloaderText = preloader.querySelector("h1");

  gsap.set(document.body, { overflow: "hidden" });

  const setPercentage = (p: number) => {
    document.documentElement.style.setProperty("--loading-progress", `${p}%`);
    preloaderText.textContent = `${p}%`;
  }

  const preloadImages = () => {
    return new Promise((resolve) => {
      new ImagesLoaded(document.querySelectorAll("img"), resolve).on("progress", (instance: any) => {
        const totalImages = instance.images.length;
        const loaded = instance.progressedCount;
        const percentage = Math.floor((100 / totalImages) * loaded);
        setPercentage(percentage)
      });
    });
  }

  const removePreloader = () => {
    document.body.classList.remove("loading");
    gsap.to(preloader, {
      opacity: 0,
      delay: 0.5,
      onComplete: () => {
        preloader.remove();
        gsap.set(document.body, { overflow: "auto" });
      },
    });
  }

  return { preloadImages, removePreloader }
}

export default Preload;