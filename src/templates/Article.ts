import { html } from "lit-html";
import { setMeta } from "../utils/common";

interface Props {
  id: string;
}

const Article = ({ id }: Props) => {
  setMeta({ title: `Article ${id}` });

  return html`
  <section>
    <h1>This is the article ${id}</h1>
  </section>
`;
}

export default Article;
