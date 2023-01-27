let nums = []
let texto = document.getElementById('texto')

function addNum() {
    let num = document.getElementById('inum')
    let inums = document.getElementById('inums')
    if (num.value < 1 || num.value > 100 || nums.indexOf(num.value) >= 0) {
        window.alert('ERRO! Número inválido ou já adicionado.')
    } else {
        nums.push(num.value)
        let opc = document.createElement('option')
        opc.innerText = `Valor ${num.value} adicionado.`
        opc.value = `v${num.value}`
        inums.appendChild(opc)
        texto.innerHTML = ''
        num.value= ''
        document.getElementById('inum').focus() 
    }
}

function analizar() {
    let sum = 0
    let med = 0
    if (nums.length < 1) {
        window.alert('ERRO! Adicione algum valor.')
    } else {
        for (let i in nums) {
            sum += Number(nums[i]) 
        }
        med = sum / nums.length
        texto.innerHTML = `<p>Ao todo temos ${nums.length} números</p>`
        texto.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(null, nums)}</p>`
        texto.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(null, nums)}</p>`
        texto.innerHTML += `<p>Somando tudo, temos: ${sum}</p>`
        texto.innerHTML += `<p>Temos uma média: ${med}</p>`
    }
}