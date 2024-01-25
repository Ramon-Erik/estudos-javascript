const alunos = [
    { nome: 'Marcos', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Lucas', nota: 9.8, bolsista: false },
    { nome: 'Rita', nota: 8.7, bolsista: false }
]

const isBolsista = aluno => aluno.bolsista

const res = alunos.map(isBolsista).reduce((ac, at) => {
    if (!at) {
        ac = false
    }
    return ac
}, true)
console.log(res)

const res2 = alunos.map(isBolsista).reduce((ac, at) => {
    if (at) {
        ac++
    }
    return ac
}, 0)

console.log(res2)