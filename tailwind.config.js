module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.ts"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-aspect-ratio")],
};
