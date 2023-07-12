function tratarErroELancar(erro) {
    throw new Error('aaaaaaaa')
}

function imprimirNomeGritado(obj) {
    console.log(obj.name.toUpperCase() + '!!!')
}

const obj = { nome: 'Roberto' }

try {
    imprimirNomeGritado(obj)
} catch (e) {
    tratarErroELancar(e)
} finally {
    console.log('errado ou não, eu era')
}

// function tratarErroELancar(erro) {
//     // throw new Error('...')
//     // throw 10
//     // throw true
//     // throw 'mensagem'
//     throw {
//         nome: erro.name,
//         msg: erro.message,
//         date: new Date
//     }
// }

// function imprimirNomeGritado(obj) {
//     try {
//         console.log(obj.name.toUpperCase() + '!!!')
//     } catch (e) {
//         tratarErroELancar(e)
//     } finally {
//         console.log('final')
//     }
// }

// const obj = { nome: 'Roberto' }
// imprimirNomeGritado(obj)