function contar() {
    var ini = Number(document.getElementById('inicio').value)
    var f = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var texto = document.getElementById('texto')

    texto.innerText = ini

    for (ini; ini <= f; ini += passo) {
        texto.innerText += ` -> ${ini}`
    }
}