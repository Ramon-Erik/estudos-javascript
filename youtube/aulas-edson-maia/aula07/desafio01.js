document.write('<h2>Informações</h2>')
let lutadorNome = 'Ramon'
let lutadorNac = 'Ramon'
let lutadorIdade = 'Ramon'
let lutadorPeso = 'Ramon'
let lutadorAltura = 'Ramon'

document.write(`<p>Lutador  ${lutadorNome}</p>`)
document.write(`<p>nacionalidade:  ${lutadorNac}</p>`)
document.write(`<p>idade:  ${lutadorIdade}</p>`)
document.write(`<p>peso:  ${lutadorPeso}</p>`)
document.write(`<p>Altura:  ${lutadorAltura}</p>`)

document.write('<h2>Frase do Dia</h2>')
const dia = new Date().getDay()
const mes = new Date().getMonth()
const ano = new Date().getFullYear()
const msg = 'lorem10'
const autor = 'lorem3'

document.write(`<p>${dia}/${mes}/${ano}</p>`)
document.write(`<p>${msg}</p>`)
document.write(`<p>Autor: ${autor}</p>`)

document.write('<h2>Array de Meses do Ano</h2>')
let meses = ['jan', 'fev', 'mar']

for (let c = 0; c <= meses.length-1; c++){
    document.write(`${meses[c]}, `)
}
document.write(`...`)

document.write('<h2>Objeto jogo</h2>')
let jogo = {
    nome: 'mine',
    dev: 'eu',
    lanc: 20000
}

document.write(`<p>Jogo: ${jogo.nome}</p>`)
document.write(`<p>devoped by: ${jogo.dev}</p>`)
document.write(`<p>Ano de lançamento: ${jogo.lanc}</p>`)
