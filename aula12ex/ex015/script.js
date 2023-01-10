function analizar() {
    var idade = new Date().getFullYear() - document.getElementById('anoUsuario').value

    var nomeIdade = 'idoso'
    if (idade >= 55) {
        nomeIdade = 'idoso'
    } else if (idade < 55 && idade >= 20) {
        nomeIdade = 'adulto'
    } else if (idade < 20 && idade >= 16) {
        nomeIdade = 'jovem'
    } else {
        nomeIdade = 'bebe'
    }

    var sexo = document.getElementById('sexoM').checked == true? 'masculino' : 'feminino'
    console.log(sexo)

    var areaTexto = document.getElementById('texto')
    areaTexto.innerHTML = `<p>Aqui nós temos:<br>${nomeIdade}<br>(${idade} anos)</p>`
    areaTexto.innerHTML += `<p><img src='imagens/${sexo}/foto-${nomeIdade}-${sexo[0]}.png' alt='foto de um ${nomeIdade} ${sexo}'></p>`
}