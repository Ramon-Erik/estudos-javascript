let nums = []
let texto = document.getElementById('texto')

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
        texto.innerHTML = ''
    }
}

function analizar() {
    let sum = 0
    let med = 0
    if (nums.length < 1) {
        window.alert('ERRO! Adicione algum valor.')
    } else {
        for (let item in nums) {
            sum += Number(nums[item])
        }
        med = sum / nums.length
        texto.innerHTML = `<p>Ao todo temos ${nums.length} números</p>`
        texto.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(null, nums)}</p>`
        texto.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(null, nums)}</p>`
        texto.innerHTML += `<p>Somando tudo, temos: ${sum}</p>`
        texto.innerHTML += `<p>Temos uma média: ${med}</p>`
    }
}