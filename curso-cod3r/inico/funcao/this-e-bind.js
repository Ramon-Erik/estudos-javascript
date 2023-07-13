const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

const fala1 = pessoa.falar()

// fala1()

const fala2 = pessoa.falar.bind(pessoa)

fala2()