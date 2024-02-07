// console.log(global)

// Object.freeze() faz que os valores não alterem
globalThis.MinhaApp = Object.freeze({
    saudacao() {
        return 'estou em todos os lugares'
    }, 
    nome: 'Sistema Legal'
})