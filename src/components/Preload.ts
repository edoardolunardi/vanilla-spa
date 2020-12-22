/* eslint-disable @typescript-eslint/no-explicit-any */
import ImagesLoaded from "imagesloaded";
import { gsap } from "gsap";

class Preload {
  preloader: HTMLElement;
  preloaderText: HTMLElement;
  totalImages: number;
  loaded: number;
  percentage: number;

  constructor(preloader: HTMLElement) {
    document.documentElement.style.setProperty("--loading-progress", "0%");

    this.preloader = preloader;

    this.preloaderText = this.preloader.querySelector("h1");

    gsap.set(document.body, { overflow: "hidden" });
  }

  setPercentage(percentage: number): void {
    document.documentElement.style.setProperty("--loading-progress", `${percentage}%`);
    this.preloaderText.textContent = `${percentage}%`;
  }

  preloadImages(): Promise<any> {
    return new Promise((resolve) => {
      new ImagesLoaded(document.querySelectorAll("img"), resolve).on("progress", (instance: any) => {
        this.totalImages = instance.images.length;

        this.loaded = instance.progressedCount;

        this.percentage = Math.floor((100 / this.totalImages) * this.loaded);

        this.setPercentage(this.percentage);
      });
    });
  }

  removePreloader(): void {
    document.body.classList.remove("loading");

    gsap.to(this.preloader, {
      opacity: 0,
      delay: 0.5,
      onComplete: () => {
        this.preloader.remove();

        gsap.set(document.body, { overflow: "auto" });
      },
    });
  }
}

export default Preload;
