/* enuncado ex002:
    Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
    Equilátero: Os três lados são iguais. 
    Isósceles: Dois lados iguais. 
    Escaleno: Todos os lados são diferentes.
    Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
    ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
    triângulo).
*/ 

function mostrarTipoTriangulo(lado1, lado2, lado3) {
    // verificar se é Equilátero:
    if (lado1 === lado2 && lado2 === lado3) {
        return 'Equilátero'
        // verificar se é Isóceles:
        return tipo
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3 ) { 
        return 'Isóceles'
        // verificar se é Escaleno:
    } else {
        return 'Escaleno'
    }
}

console.log(mostrarTipoTriangulo(5, 5, 5))
console.log(mostrarTipoTriangulo(5, 3, 5))
console.log(mostrarTipoTriangulo(3, 4, 5))