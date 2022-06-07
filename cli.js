const chalk = require('chalk');

const getFile = require('./index')
const commandPath = process.argv;

function textProcess(filePath){
    const result = getFile(filePath[2]);
    console.log(chalk.yellow('lista de links'), result)
}


textProcess(commandPath)

