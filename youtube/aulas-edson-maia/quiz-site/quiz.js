let nQuest = document.querySelector('.num-quest')
let score = document.querySelector('.points > p')
let totPonts = 0
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

function next(index) {
    let quest = document.querySelector('.question > h4')
    let options = document.querySelectorAll('.option')
    let footerQuest = document.querySelector('.info > span')
    
    options.forEach((element, i) => {
        // console.log(element, i, index)
        element.style.backgroundColor = 'transparent'
        element.innerText = questions[index][i]
    })
    quest.innerText = questions[index][0]
    nQuest.innerText = ++index
    footerQuest.innerText = `Question ${index} of 5`
}

function fPoints(points) {
    totPonts += points
    score.innerText = 'points: ' + totPonts
}

function verify(btn) {
    if (btn.innerText + '.' == questions[Number(nQuest.innerText)-1][1]) {
        btn.style.backgroundColor = 'green'
        fPoints(10)
        next(Number(nQuest.innerText))
    } else {
        btn.style.backgroundColor = 'red'
        fPoints(-10)
        setTimeout(() => {
            btn.style.backgroundColor = 'transparent'
        }, 1200)
    }
}