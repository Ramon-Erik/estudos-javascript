// extrutura simples
function digaOi() {
    console.log('Oi')
}
digaOi()

// usando parametros / parametros pre-definidos
function digaNome(nome='nome não informado') {
    console.log(`Olá! ${nome}`)
}
digaNome()
digaNome('Ramon')

// usando retorno
function soma(a, b) {
    return a+b
}
console.log(soma(1, 1))

// funções como classes
function menu() {
    function esconderMenu() {
        
    }
    function mostrarMenu() {

    }
}

// funções em variaveis (podem ser arrays) // funções anonimas
const calcular = [
    function (a,b) {
        return a+b
    },
    function (a,b) {
        return a*b
    }

]
console.log(calcular[0](1, 2))