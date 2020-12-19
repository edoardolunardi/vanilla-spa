import { setMeta } from "../utils";
import { html, TemplateResult } from "lit-html";

class About {
  constructor() {
    setMeta({ title: "About Page" });

    this.render = this.render.bind(this);
  }

  render(): TemplateResult {
    return html`
      <section data-router-view>
        <a href="/">Homepage</a>
        <h1>Hello from the about page</h1>
      </section>
    `;
  }
}

export default About;
