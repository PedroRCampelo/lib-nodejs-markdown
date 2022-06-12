const getFile = require('../index')

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('getFile::', () => {
    it('deve ser um funcao', ()=>{
        expect(typeof getFile).toBe('function');
    })

    it('retorna um array de resultados', async ()=>{
        const result = await getFile('/home/pedro/all/pessoal/lib-nodejs-markdown/test/testFiles/texto1.md')
        expect(result).toEqual(arrayResult)
    })

    it('deve retornar o avisa de que nao ha links', async ()=>{
        const result = await getFile('/home/pedro/all/pessoal/lib-nodejs-markdown/test/testFiles/texto1_noLinks.md')
        expect(result).toBe('nao ha links')
    })
})


