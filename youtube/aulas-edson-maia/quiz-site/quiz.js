let questions = [
    [
        'Wich language is from Guido Van Rossum?',
        'C++',
        'JavaScript',
        'Python.'
    ],
    [
        'Who is the father of..?',
        'Alan Turing.',
        'Rasmus Lerdof',
        'Brendan Eich'
    ]
]

let nQuest
let quest = document.querySelector('.question > h4')
let infoPage = document.querySelector('.info > p')
let options = document.querySelectorAll('.option')

function next() {
    console.log('next')
}

function verify(btn) {
    nQuest = Number(document.querySelector('.num-quest').innerText) - 1
    for (let c = 1; c < 4; c++) {
        console.log(btn.innerText+'.' + '  ' + questions[nQuest][c])
        if (btn.innerText+'.' == questions[nQuest][c]) {
            console.log('ok')
            btn.style.backgroundColor = 'green'
            next()
            break
        } else {
            console.log('not ok')
            btn.style.backgroundColor = 'red'
            setTimeout(() => {
                btn.style.backgroundColor = 'transparent'
            },1200)
        }
    }
}