/* eslint-disable */
const path = require("path");
const { promisify } = require("util");
const sharp = require("sharp");
const glob = require("glob");

const imgsDir = path.join("./static/images/", "**/*.+(jpg|jpeg|png)");
const globP = promisify(glob);

const addThumbToName = filePath => {
  const parts = filePath.split("/");
  const fileName = 'thumb.' + parts.pop();

  return [...parts, fileName].join('/');
};

globP(imgsDir)
  .then(files =>
    Promise.all(files
      .filter(file => !/\.(thumb)\./.test(file))
      .map(proccessFile)
    )
  )
  .then(() => console.info("Finished"))
  .catch(err => console.error(err));

function proccessFile(file) {
  console.log(`Processing file ${file}`);
  return generateThumb(file);
}

function generateThumb(file) {
  const thumb = addThumbToName(file);
  return sharp(file)
    .resize(64, 64)
    .max()
    .toFile(thumb)
    .then(() => console.info(`Outputed file ${thumb}`))
}
