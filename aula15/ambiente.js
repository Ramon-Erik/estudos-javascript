let num = [1, 2, 3]

// adicionando um valor
num[3] = 8
num.push(7)

console.log(`Nosso vetor: ${num}`)
console.log(`ele tem ${num.length} casas`)
console.log(`seu primeiro valor é ${num[0]}`)
num.sort()
console.log(`organizado ${num}`)
for (let posicao = 0; posicao <= num.length-1; posicao++) {
    console.log(num[posicao])
}