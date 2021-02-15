import { html, TemplateResult } from "lit-html";
import { setMeta } from "../utils/common";

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
