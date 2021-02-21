import { html } from "lit-html";

const styles = {
  imageContainer: "w-full relative overflow-hidden aspect-ratio-16/9 mb-12",
  image: "absolute inset-0 w-full h-full object-cover",
};

const ImageBlock = (seed: number) => {
  return html`
    <div class=${styles.imageContainer}>
      <img src="https://picsum.photos/1920/1080/?random=${seed}" class=${styles.image} />
    </div>
  `
}

export default ImageBlock;