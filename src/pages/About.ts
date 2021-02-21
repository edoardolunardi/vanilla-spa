import { html } from "lit-html";
import { setMeta } from "../utils/common";
import Hero from "../components/Hero";
import ImageBlock from "../components/ImageBlock";

const About = () => {
  setMeta({ title: "About Page" });

  return html`
    <section class="min-h-screen">
      ${Hero({ title: "Hello from the about page", link: { title: "Go to the homepage", href: "/" } })}
      ${[...new Array(10)].map((_, i) => ImageBlock(i + 11))}
    </section>
    `;
}

export default About;