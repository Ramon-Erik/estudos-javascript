function contar() {
    var ini = document.getElementById('inicio').value
    var f = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var texto = document.getElementById('texto')
    
    texto.innerText = ini
    for (var c = ini; f; c++) {
        texto.innerText += ' -> ' + c
        console.log(c)
    }
}