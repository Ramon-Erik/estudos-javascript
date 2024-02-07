const fs = require('fs');
const { json } = require('stream/consumers');

const caminho = __dirname + '/arquivo.json'

// sincrono... lÊ o arquivo inteiro e só depois responde
// não muito intressante

const conteudoS = fs.readFileSync(caminho, 'utf-8')
console.log(conteudoS)

// modo asincrono
fs.readFile(caminho, (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`as.. host: ${config.db.host}`)
})

// lendo json normal
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, ar) => {
    console.log(' ')  
    console.log(ar)  
    console.log(' ')  
})