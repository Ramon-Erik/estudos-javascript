/* enunciado ex012:
    Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(num) {
    for (let index = num-1; index > 0; index--) {
        num = num * index
    }
    console.log(num)
    return num
}

fatorial(0)