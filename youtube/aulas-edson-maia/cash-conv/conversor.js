let cashImg = document.querySelector('#choosed')

function changeCashImg(input) {
    let newSrc = 'imgs/cash/'

    switch (input.id) {
        case 'iBit':
            newSrc += 'bitcoin.png'
            break
        case 'iLib':
            newSrc += 'libra.png'
            break
        case 'iEur':
            newSrc += 'euro.png'
            break
        default:
            newSrc += 'real.png'
            break
    }
    cashImg.src = newSrc
}

function convert() {
    let cash = document.querySelector('#iCash').value
    changeCashImg(document.querySelector('input[type=radio]').checked.id)
    let txtArea = document.querySelector('#iValueCoverted')
    if (cash < 1) {
        txtArea.value = 'Please, put a value'
    } else {
        txtArea.value = 'Please, put a value'
    }
}