/* enunciado ex007:
    Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x2 - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.
*/

function bhaskara(ax,bx, c) {
    const a = Number(ax.slice(0, ax.length-2))
    const b = Number(bx.slice(0, bx.length-1))
    const delta = b**2 -4*a*c
    const raizes = []
    if (delta > 0) {
        raizes.push((-1*b + Math.sqrt(delta))/2*a)
        raizes.push((-1*b - Math.sqrt(delta))/2*a)
        return raizes
    } else {
        return 'Delta é negativo'
    }
}

console.log(bhaskara('3x2', '-5x', '12'))
console.log(bhaskara('7x2', '-5x', '-12'))