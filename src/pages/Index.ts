import { setMeta } from "../utils";
import { html, TemplateResult } from "lit-html";

class Index {
  title: string;

  constructor() {
    setMeta({ title: "Homepage" });
  }

  render(): TemplateResult {
    return html`
      <section class="min-h-screen" sm00th-scroll-section>
        <div class="my-64 flex flex-col items-center text-center">
          <h1 class="text-purple-500 font-sans text-5xl mb-6" data-content="homepage-title">Hello from the homepage</h1>
          <a href="/about">Go to the about page</a>
          <h1>${this.title}</h1>
        </div>
        <div class="w-full relative overflow-hidden aspect-ratio-16/9 mb-12">
          <img src="https://picsum.photos/1920/1080/?random=1" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="w-full relative overflow-hidden aspect-ratio-16/9 mb-12">
          <img src="https://picsum.photos/1920/1080?random=2" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="w-full relative overflow-hidden aspect-ratio-16/9 mb-12">
          <img src="https://picsum.photos/1920/1080?random=3" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="w-full relative overflow-hidden aspect-ratio-16/9 mb-12">
          <img src="https://picsum.photos/1920/1080?random=4" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="w-full relative overflow-hidden aspect-ratio-16/9 mb-12">
          <img src="https://picsum.photos/1920/1080?random=5" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="w-full relative overflow-hidden aspect-ratio-16/9 mb-12">
          <img src="https://picsum.photos/1920/1080?random=6" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="w-full relative overflow-hidden aspect-ratio-16/9 mb-12">
          <img src="https://picsum.photos/1920/1080?random=7" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="w-full relative overflow-hidden aspect-ratio-16/9">
          <img src="https://picsum.photos/1920/1080?random=8" class="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>
    `;
  }
}

export default Index;
