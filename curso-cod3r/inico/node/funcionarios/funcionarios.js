const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios');

// desafio: mulher chinsa m menor salário

axios.get(url).then(response => {
    const funcionarios =  response.data
    const mulheresChinesas = func => func.genero == "F" && func.pais == "China" 

    console.log(
        funcionarios.filter(mulheresChinesas).reduce((ac, at) => {
            console.log(ac.salario, at.salario)
            if (ac.salario < at.salario) {
                return ac
            } else {
                return at
            }
        })
    )
})