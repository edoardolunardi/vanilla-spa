import { html, TemplateResult } from "lit-html";
import { setMeta } from "../utils/common";

interface Params {
  id: string;
}
class Article {
  params: Params;

  constructor(params: Params) {
    this.params = params;
    setMeta({ title: `Article ${this.params.id}` });
  }

  render(): TemplateResult {
    return html`
      <section>
        <h1>This is the article ${this.params.id}</h1>
      </section>
    `;
  }
}

export default Article;
