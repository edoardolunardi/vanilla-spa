import { html } from "lit-html";
import { setMeta } from "../utils/common";

const NotFound = () => {
  setMeta({ title: "404 Not Found" });

  return html`
    <section>
      <h1>404 not found</h1>
    </section>
  `;
}

export default NotFound;
