/* enunciado ex004:
    Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.
*/ 

function dividir(dividendo, divisor) {
    console.log(`Resultado: ${dividendo/divisor}; result. inteiro: ${Math.floor(dividendo/divisor)}; resto: ${dividendo%divisor}`)
}

dividir(10, 2)
dividir(5, 2)