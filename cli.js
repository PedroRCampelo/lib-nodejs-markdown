// O usuário passará pela linha de comando o local do arquivo com o texto.

const pegaArquivo = require('./index')
const caminho = process.argv;

console.log(pegaArquivo(caminho[2]));

// Exemplo de execução: node cli.js ./arquivos/texto1.md