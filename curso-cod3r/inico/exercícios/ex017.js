/* enunciado ex017:
    Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumentoSalarial(planoDeTrabalho, dinheiroAtual) {
    switch (planoDeTrabalho.toUpperCase()) {
        case 'A':
            return dinheiroAtual + (.1 * dinheiroAtual)
        case 'B':
            return dinheiroAtual + (.15 * dinheiroAtual)
        case 'C':
            return dinheiroAtual + (.2 * dinheiroAtual)
        default:
            return 'Plano inválido'
    }
}

console.log(aumentoSalarial('A', 1000))
console.log(aumentoSalarial('B', 1000))
console.log(aumentoSalarial('C', 1000))
console.log(aumentoSalarial('D', 1000))