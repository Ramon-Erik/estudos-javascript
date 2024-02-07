const fs = require('fs');

const produto = {
    nome: 'celular',
    preco: 123.54,
    desconto: .5
}

fs.writeFile(__dirname + '/arquivoCriado.js', JSON.stringify(produto), er => console.log(er || 'ok'))