/* enunciado ex006:
    Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
*/

function calcularJuroSimples(c,i,t) {
    return c + (c*i*t)
}

function calcularJuroComposto(c,i,t) {
    return c * (1+i)**t
}

console.log(calcularJuroSimples(100, 2, 10/100))
console.log(calcularJuroComposto(100, 2, 10/100))