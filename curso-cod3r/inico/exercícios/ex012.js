/* enunciado ex012:
    Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(num) {
    if (num > 1) {
        for (let index = num-1; index > 0; index--) {
            num = num * index
        }
        console.log(num)
        return num
    } else {
        return 1
    }
}

console.log(fatorial(0))
fatorial(5)