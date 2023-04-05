const obj = [
    {
        "nome": "math",
        "idade": 19,
        "estuda": true,
        "detalhes_estudos": {
            "materia": ["port", "mat"],
            "escola": "salaberga"
        },
        "apelidos": ["m", "l"]
    },
    {
        "nome": "pauo",
        "idade": 19,
        "estuda": null,
        "detalhes_estudos": {
            "materia": null,
            "escola": null
        },
        "apelidos": ["m", "l"]
    }
]

console.log(obj)
// objetos js para json
const jsonData = JSON.stringify(obj)
console.log('espaço')
console.log(jsonData)
console.log('espaço')
// json para js
const objectData = JSON.parse(jsonData)
console.log(objectData)
objectData.map(pessoa => {
    console.log(pessoa.nome)
})
