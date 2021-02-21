const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const minify = require("@node-minify/core");
const ora = require("ora");
const chalk = require("chalk");
const prettyMs = require("pretty-ms");
const htmlMinifier = require("@node-minify/html-minifier");
const Prerenderer = require("@prerenderer/prerenderer");
const Puppeteer = require("@prerenderer/renderer-puppeteer");

const routes = ["/", "/about"];

(async () => {
  console.log("");

  const spinner = ora(chalk.grey("Prerendering")).start();

  const prerenderer = new Prerenderer({
    staticDir: path.join(__dirname, "dist"),
    renderer: new Puppeteer(),
  });

  try {
    await prerenderer.initialize();
    const start = Date.now();

    const renderedRoutes = await prerenderer.renderRoutes(routes);

    renderedRoutes.forEach(async (renderedRoute) => {
      const dir = path.join(__dirname, "dist", renderedRoute.route);
      const file = `${dir}/index.html`;
      mkdirp.sync(dir);
      const min = await minify({ compressor: htmlMinifier, content: renderedRoute.html });
      fs.writeFileSync(file, min);
    });

    const end = Date.now();

    spinner.stopAndPersist({
      symbol: "✨ ",
      text: chalk.green(`Prerendered in ${prettyMs(end - start)}.`),
    });

    prerenderer.destroy();
  } catch (e) {
    console.log(e);
    prerenderer.destroy();
  }
})();
