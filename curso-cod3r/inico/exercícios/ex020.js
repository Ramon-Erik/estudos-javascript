/* enunciado ex020
    Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, a solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function contarElementos(array, el) {
    let cont = -1
    array.reduce(function (contagem, elemento) {
        if (elemento == el) {
            contagem++
        }
        cont = contagem
        return contagem
    }, 0)
    return cont
}

function tirarElementosDuplicados(array) {
    let novoArray = []
    array.forEach(element => {
        if (novoArray.indexOf(element) == -1) {
            novoArray.push(element)
        }
    })
    return novoArray
}

function entregarCedulas(dinheiro) {
    const darCedulas = []
    let msgFinal = `R\$${dinheiro}: `

    while (dinheiro > 0) {
        if (dinheiro % 100 === 0) {
            darCedulas.push(100)
            dinheiro -= 100
        } else if (dinheiro % 50 === 0) {
            darCedulas.push(50)
            dinheiro -= 50
        } else if (dinheiro % 10 === 0) {
            darCedulas.push(10)
            dinheiro -= 10
        } else if (dinheiro % 5 === 0) {
            darCedulas.push(5)
            dinheiro -= 5
        } else {
            darCedulas.push(1)
            dinheiro -= 1
        }
    }
    tirarElementosDuplicados(darCedulas).forEach((el => msgFinal += `${contarElementos(darCedulas, el)} nota(s) de ${el}. `))
    return msgFinal
}

console.log(entregarCedulas(143))