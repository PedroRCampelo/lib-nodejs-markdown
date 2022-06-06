const text = require("body-parser/lib/types/text");
const chalk = require("chalk");
const fs = require("fs");

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;

  // enquanto o valor de temp for diferente de null vamos empurrar para o array de resultados um obj quem tem como chave o indice 1 (nome do site) e por valor o indice 2 (link do site)
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] });
  }
  
  return arrayResultados
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "erro no caminho do arquivo"));
}

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const data = await fs.promises.readFile(caminhoDoArquivo, "utf-8");
    console.log(extraiLinks(data));
  } catch (err) {
    trataErro(err);
  }
}

// Executaremos em outro arquivo
module.exports = pegaArquivo;