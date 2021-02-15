import { html, TemplateResult } from "lit-html";
import { setMeta } from "../utils/common";

const styles = {
  hero: "my-64 flex flex-col items-center text-center",
  heroTitle: "text-purple-500 font-sans text-5xl mb-6",
  imageContainer: "w-full relative overflow-hidden aspect-ratio-16/9 mb-12",
  image: "absolute inset-0 w-full h-full object-cover",
};

class Index {
  constructor() {
    setMeta({ title: "Homepage" });
  }

  render(): TemplateResult {
    return html`
      <section class="min-h-screen">
        <div class=${styles.hero}>
          <h1 class=${styles.heroTitle}>Hello from the homepage</h1>
          <a href="/about">Go to the about page</a>
        </div>
        ${[...new Array(10)].map(
          (_, i) => html` <div class=${styles.imageContainer}>
            <img src="https://picsum.photos/1920/1080/?random=${i + 1}" class=${styles.image} />
          </div>`
        )}
      </section>
    `;
  }
}

export default Index;
