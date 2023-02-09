let meuArray = ['laranja'] 

// adicionar
meuArray.push(true)

// tirar o ultimo
meuArray.pop()

// adicionar no inicio
meuArray.unshift('maçã', 'melão')

// remover no inicio
meuArray.shift()

// removendo em posição especifica (atributos: pos. inicial e quantos itens remover)
meuArray.splice(2, 1)

// fazer uma copia do array
let outroArray = meuArray.slice()

// fazer uma copia de itens do array 
let maisArray = meuArray.slice(0, 2) //pos. inicial e quantos itens copiar

// spread operator -> um operador para copiar os itens de um array
let arrayTeste = [...meuArray, 0, 1, 3]

// adicionando ou modificando valores do array
meuArray[11] = 'eu sou lindo'
meuArray[0] = 'modificado industrialmente'