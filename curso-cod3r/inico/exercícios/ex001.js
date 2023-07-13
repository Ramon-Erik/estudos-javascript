/* enunciado ex001:
    Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.*/

function calcular(valor1=0, valor2=0) {
    console.log(`Soma: ${valor1+valor2}\nSubtração: ${valor1-valor2}\nMultiplicação: ${valor1*valor2}\nDivisão: ${valor1/valor2}`)
}

calcular(5, 5)