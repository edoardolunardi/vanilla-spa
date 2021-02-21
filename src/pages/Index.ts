import { html } from "lit-html";
import { setMeta } from "../utils/common";
import Hero from "../components/Hero"
import ImageBlock from "../components/ImageBlock";

const Index = () => {
  setMeta({ title: "Homepage" });

  return html`
    <section class="min-h-screen">
      ${Hero({ title: "Hello from the homepage", link: { title: "Go to the about page", href: "/about" } })}
      ${[...new Array(10)].map((_, i) => ImageBlock(i + 1))}
    </section>
  `;
}

export default Index;
