const fs = require("fs-extra");
const path = require("path");
const md5 = require("md5");
const UglifyJS = require("uglify-es");

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");
const srcJsPath = path.resolve(srcPath, "js");
const horlogeJsPath = path.resolve(srcJsPath, "horloge.js");
const indexJsPath = path.resolve(srcJsPath, "index.js");
const indexHtmlPath = path.resolve(srcPath, "index.html");
const indexHtmlDistPath = path.resolve(distPath, "index.html");
const appJsDistPath = path.resolve(distPath, "app.js");

async function rmAndMkdir() {
  await fs.remove(distPath);
  await fs.mkdir(distPath);
}

async function buildJs() {
  const files = await fs.readdir(srcJsPath);

  const buffers = await Promise.all(
    files
      .filter((f) => f.endsWith(".js"))
      .map((f) => fs.readFile(path.resolve(srcJsPath, f)))
  );

  await fs.writeFile(appJsDistPath, Buffer.concat(buffers));
}

async function buildHtml() {
  let content = await fs.readFile(indexHtmlPath, { encoding: "utf-8" });

  // content = content.replace('<script src="./js/horloge.js"></script>', '<script src="./app.js"></script>')
  //        .replace('<script src="./js/index.js"></script>', '');

  content = content.replace(
    /<script.*><\/script>/s,
    '<script src="./app.js"></script>'
  );

  await fs.writeFile(indexHtmlDistPath, content);
}

async function build() {
  await rmAndMkdir();
  await Promise.all([buildJs(), buildHtml()]);
  console.log("Build done");
}

build();
