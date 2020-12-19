import { setMeta } from "../utils";
import { html, TemplateResult } from "lit-html";

class Index {
  constructor() {
    setMeta({ title: "Homepage" });

    this.render = this.render.bind(this);
  }

  render(): TemplateResult {
    return html`
      <section>
        <a href="/about">About</a>
        <h1>Hello from the homepage</h1>
      </section>
    `;
  }
}

export default Index;
