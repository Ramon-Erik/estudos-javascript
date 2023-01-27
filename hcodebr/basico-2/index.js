/* exemplo de função anonima
console.log((
    function (x, y, operador) {
    return eval(`${x} ${operador} ${y}`)
}
) (1, 2, '*'))
*/

/* function normal
function calcular(x, y, operador) {
    return eval(`${x}${operador}${y}`)
}
console.log(calcular(1, 2, '*'))
*/
/* arrow function
let calcular = (x,y,operador) => {
    return eval(`${x}${operador}${y}`)
}

let resul = calcular(2, 3, '*')
console.log(resul)
*/

// window.addEventListener('focus', event => {
//     console.log('focus')
// })

// let filmes = ['filme 1', 'filme 2', 'filme 3', 'filme 4']
// filmes.forEach(function(value, index){
//     console.log(index+1, value)
// })

let celular = function() {
    this.cor = 'prata'
    this.ligar = function() {
        console.log('ligado')
        return 'ligando'
    }
}
let cel = new celular()
console.log(cel.cor)
console.log(cel.ligar())

