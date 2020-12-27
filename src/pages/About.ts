import { setMeta } from "../utils";
import { html, TemplateResult } from "lit-html";

class About {
  constructor() {
    setMeta({ title: "About Page" });
  }

  render(): TemplateResult {
    return html`
      <section class="min-h-screen" sm00th-scroll-section>
        <div class="my-64 flex flex-col items-center text-center">
          <h1 class="text-purple-500 font-sans text-5xl mb-6" data-content="homepage-title">
            Hello from the about page
          </h1>
          <a href="/">Go to the homepage</a>
        </div>
        <div class="w-full relative overflow-hidden aspect-ratio-16/9 mb-12">
          <img src="https://picsum.photos/1920/1080/?random=9" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="w-full relative overflow-hidden aspect-ratio-16/9 mb-12">
          <img src="https://picsum.photos/1920/1080?random=10" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="w-full relative overflow-hidden aspect-ratio-16/9 mb-12">
          <img src="https://picsum.photos/1920/1080?random=11" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="w-full relative overflow-hidden aspect-ratio-16/9 mb-12">
          <img src="https://picsum.photos/1920/1080?random=12" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="w-full relative overflow-hidden aspect-ratio-16/9 mb-12">
          <img src="https://picsum.photos/1920/1080?random=13" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="w-full relative overflow-hidden aspect-ratio-16/9">
          <img src="https://picsum.photos/1920/1080?random=14" class="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>
    `;
  }
}

export default About;
