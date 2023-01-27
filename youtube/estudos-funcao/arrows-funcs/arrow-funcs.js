// sintaxes 
/*
são funções anonimas - geralmente usadas como funções de callback - usadas para escrever menos
não precisa do function e nem das chaves, mas se a func fizer mais de uma coisa precisa sim das chaves
tudo depois da => é retorno
(a,b) => {return a+b}
(a,b) => a+b
*/

// function aleatorio() {
//     return Math.random()
// }
// const numAleatorio = () => Math.random()

// document.addEventListener('click', function () {
//     console.log('clicou')
// })

// document.addEventListener('click', () => console.log('clicou'))

// arrow funcs não possuem (ou não deveriam) o elemento this

const func = function() {
    console.log('func',this)
}

const arrowFunc = () => console.log('arr', this)

arrowFunc()
func()