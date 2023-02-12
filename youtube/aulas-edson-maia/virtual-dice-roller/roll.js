let number = document.querySelector('#number')
let btnR = document.querySelector('#rollerBtn')
let img = document.querySelector('.dice>img')

function playSound() {
    let audio = new Audio('assets/songs/dado-rolando.mp3')
    audio.play()
}

function roll() {
    btnR.style.display = 'none'
    let n = parseInt(Math.random()*7)
    if (n == 0) {
        n++
    } else if (n > 6) {
        n--
    }
    img.src = `assets/dice/${n}.png`
    number.innerText = n
    setTimeout(() => {
    btnR.style.display = 'inline-block'
    },2000)
}