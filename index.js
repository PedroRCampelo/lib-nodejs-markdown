const text = require("body-parser/lib/types/text");
const chalk = require("chalk");
const fs = require("fs");

function getLinksFromText(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResult = [];
  let temp;

  
  while ((temp = regex.exec(text)) !== null) {
    arrayResult.push({ [temp[1]]: temp[2] });
  }
  
  return arrayResult
}

function handleError(error) {
  throw new Error(chalk.red(error.code, "erro no caminho do arquivo"));
}

async function getFile(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, "utf-8");
    return getLinksFromText(data);
    
  } catch (err) {
    handleError(err);
  }
}

module.exports = getFile;