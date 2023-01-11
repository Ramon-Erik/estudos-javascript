function contar() {
    var ini = Number(document.getElementById('inicio').value)
    var f = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)

    if (f == 0 || ini == 0) {
        window.alert('ERRO! Verifique os dados')
    } else {
        if (passo == 0) {
            window.alert('Passo não foi informado, considerando 1')
            passo = 1
        }
        var texto = document.getElementById('texto')

        texto.innerText = ini

        for (ini; ini <= f; ini += passo) {
            texto.innerText += ` 👉 ${ini}`
        }
        texto.innerText += ' 🏁'
    }
}