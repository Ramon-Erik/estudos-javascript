function contar() {
    var num = document.getElementById('inum').value
    var divTabuada = document.getElementById('conteudo') 
    divTabuada.style = 'border: 1px solid black;'

    for (var c = 1; c <= 10; c++) {
        divTabuada.innerHTML += `<p>${c} x ${num} = ${num*c}</p>`
    }
}