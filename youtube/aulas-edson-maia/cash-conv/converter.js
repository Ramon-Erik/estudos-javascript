let cashImg = document.querySelector('#choosed')

function changeCashImg(input) {
    let newSrc = 'imgs/cash/'
    switch (input.id) {
        case 'iBit':
            newSrc += 'bitcoin.png'
            break
        case 'iPou':
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

function convertTo(coin, cash) {
    let newCash
    switch (coin) {
        case 'iBit':
            newCash = (cash * .000040).toFixed(2) + 'BTC'
            break;
        case 'iPou':
            newCash = (cash * .83).toLocaleString('en', {style: 'currency', currency: 'GBP'})
            break;
        case 'iEur':
            newCash = (cash * .93).toLocaleString('en', {style: 'currency', currency: 'EUR'})
            break;
        default:
            newCash = (cash * 5.17).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            break;
    }
    return newCash
}

function convert() {
    let cash = document.querySelector('#iCash').value
    let txtArea = document.querySelector('#iValueCoverted')
    let coin = document.querySelector('input[name=cashType]:checked').id
    changeCashImg(coin)
    if (cash < 1) {
        txtArea.value = 'Please, put a value'
    } else {
        txtArea.value = 'The cash is: ' + convertTo(coin, cash)
    }
}