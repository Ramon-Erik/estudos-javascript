let textAreas = document.querySelectorAll('textarea')
let inputTemps = document.querySelectorAll('input[type=range]')

let inputC = document.querySelector('#iRangeC')

refreshC(inputC)

function refreshC(input) {
    textAreas[0].value = input.value
    textAreas[1].value = Number(input.value) * 1.8 + 32
    textAreas[2].value = Number(input.value) + 273.1
}

function refreshF(input) {
    textAreas[1].value = input.value
    textAreas[0].value = ((Number(input.value) - 32) * (5/9)).toFixed(1)
    textAreas[2].value = ((Number(input.value) - 32) * (5/9) + 273.1).toFixed(1)
}

function refreshK(input) {
    textAreas[2].value = input.value
    textAreas[0].value = (Number(input.value) - 273.1).toFixed(1)
    textAreas[1].value = ((Number(input.value) - 273.1) * (9/5) + 32).toFixed(1)
}

function clearAll() {
    textAreas[0].value = inputTemps[0].value = 0
    textAreas[1].value = inputTemps[1].value = 32
    textAreas[2].value = inputTemps[2].value = 273.1
}