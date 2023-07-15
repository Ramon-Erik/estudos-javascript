/*enunciado ex010:
Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.*/

function divisivelPorTres(num) {
    return num%3===0
}

console.log(divisivelPorTres(3))
console.log(divisivelPorTres(2))
console.log(divisivelPorTres(150))