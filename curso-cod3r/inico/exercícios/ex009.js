/* enunciado ex009:
Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado. */

function classificarNota(nota) {
    if (nota >= 40 || nota + 3 >= 40) {
        for (let i = 0; i <= 3; i++) {
            if ((nota + i) % 5 == 0 || 5 - (nota % 5) >= 4) {
                return [nota + i, i]
            }
        }
    } else {
        return ['reprovado', nota + 3]
    }
}

console.log(classificarNota(100))
console.log(classificarNota(30))
console.log(classificarNota(38))
console.log(classificarNota(88))
console.log(classificarNota(61))
for (let i = 0; i  < 10; i++) {console.log(classificarNota(Math.random().toFixed(2) * 100))}