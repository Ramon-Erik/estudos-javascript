// criando um objeto
let pessoa = {
    nome: 'ramon', //adicionando uma propriedade/atributo
    idade: 16, // idade é a key e 16  value
    escolas: [],
    peso: 55,
    altura: 1.54
}

//acessando um valor
pessoa.nome
pessoa['nome']

let imc = pessoa['peso']/pessoa.altura**2
console.log(imc.toFixed(1))

// colocando valores no arrayy dentro de pessoa
pessoa.escolas = ['Capistrano de Abreu']
pessoa.escolas = [...pessoa.escolas, 'Manoel Rodrigues']
pessoa.escolas.push('Salaberga')

document.write(imc + '<br>')
document.write(imc)
