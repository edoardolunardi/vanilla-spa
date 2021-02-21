import { html } from "lit-html";

const styles = {
  hero: "my-64 flex flex-col items-center text-center",
  heroTitle: "text-purple-500 font-sans text-5xl mb-6",
};

type Link = {
  title: string,
  href: string
}

interface Props {
  title: string
  link: Link
}

const Hero = ({ title, link }: Props) => {
  return html`
    <div class=${styles.hero}>
      <h1 class=${styles.heroTitle}>${title}</h1>
      <a href=${link.href}>${link.title}</a>
    </div>
  `
}

export default Hero;