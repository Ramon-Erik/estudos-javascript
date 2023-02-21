// let infoPage = document.querySelector('.info > span')
// let quest = document.querySelector('.question > h4')
// let options = document.querySelectorAll('.option')
let questions = [
    [ //q1
        'Wich language is from Guido Van Rossum?',
        'Python.',
        'C++',
        'JavaScript'
    ],
    [ //q2
        'Who is the father of..?',
        'Alan Turing.',
        'Rasmus Lerdof',
        'Brendan Eich'
    ]
]

let nQuest
let points = document.querySelector('.points > p')

function next() {
    console.log('next')
}

function points() {
    return
}

function verify(btn) {
    nQuest = Number(document.querySelector('.num-quest').innerText) - 1
    if (btn.innerText + '.' == questions[nQuest][1]) {
        btn.style.backgroundColor = 'green'
        console.log(Number(points.innerText))
        next()
    } else {
        btn.style.backgroundColor = 'red'
        setTimeout(() => {
            btn.style.backgroundColor = 'transparent'
        }, 1200)
    }
}