let amigo = {
    nome:'Ramon',
    sexo:'M',
    peso:55,
    engordar(p=0){
        this.peso += p
        return p
    }
}

console.log(`${amigo.nome} tem ${amigo.peso}Kg. Comeu uma pizza e engordou ${amigo.engordar(9)}kg. Agoa tem ${amigo.peso}Kg`)