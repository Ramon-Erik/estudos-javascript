let nums = []
function addNum() {
    let num = document.getElementById('inum').value
    let inums = document.getElementById('inums')
    if (num < 1 || num > 100 || nums.indexOf(num) >= 0) {
        window.alert('ERRO! Número inválido ou já adicionado.')
    } else {
        nums.push(num)
        let opc = document.createElement('option')
        opc.innerText = `Valor ${num} adicionado.`
        opc.value = `v${num}`
        inums.appendChild(opc)
    }
}

function analizar() {
    
}