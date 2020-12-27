import { setMeta } from "../utils";
import { html, TemplateResult } from "lit-html";

class NotFound {
  constructor() {
    setMeta({ title: "404 Not Found" });
  }

  render(): TemplateResult {
    return html`
      <section>
        <h1>404 not found</h1>
      </section>
    `;
  }
}

export default NotFound;
