const chalk = require('chalk');
const URLsValidation = require('./http-validation')
const getFile = require('./index')

const commandPath = process.argv;

async function textProcess(filePath){
    const result = await getFile(filePath[2]);

    if(commandPath[3] === 'validate'){

        console.log(chalk.yellow('Links validados'), URLsValidation(result))    
    }
    else{
        console.log(chalk.yellow('lista de links'), result)
    }
}

textProcess(commandPath)

