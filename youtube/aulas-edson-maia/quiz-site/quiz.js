let nQuest = document.querySelector('.num-quest')
let score = document.querySelector('.points > p')
let totPonts = 0
let questions = [
    [ //q1
        'Wich language is from Guido Van Rossum?',
        'Python,',
        'C++',
        'JavaScript'
    ],
    [ //q2
        'Who is the father of technology?',
        'Alan Turing,',
        'Rasmus Lerdof',
        'Brendan Eich'
    ],
    [ //q3
        'Complete: PHP is in ... of web,',
        '78.9%,',
        '79.4%',
        '72.1%'
    ],
    [ //q4
        'What does I.T. stand for?',
        'Information technology,',
        'Insecurity and Tired',
        'Internet Technology'
    ],
    [ //q5
        'What do the IT companies Microsoft, Apple, HP, Google all have in common?',
        'They were all started in garages,',
        'They were bought from Meta',
        'They are ilusrated books'
    ]
]

function next(index) {
    let quest = document.querySelector('.question > h4')
    let options = document.querySelectorAll('.option')
    let footerQuest = document.querySelector('.info > span')
    if (index < 5) { // displaying questions
        // changing the options text
        options.forEach((element, i) => {
            element.classList.remove('color-g')
            element.innerText = questions[index][i + 1].replace(',', '')
        })
        quest.innerText = questions[index][0]
        nQuest.innerText = ++index
        footerQuest.innerText = `Question ${index} of 5`
    } else { // displaying the final result
        options.forEach(element => {
            element.style.display = 'block'
            console.log(element)
        })
    }
}

function fPoints(points) { // function to change the score
    totPonts += points
    score.innerText = 'points: ' + totPonts
}

function verify(btn) { // verifying if the answer is correct
    if (btn.innerText + ',' == questions[Number(nQuest.innerText) - 1][1]) {
        // the nummber in nQuest - 1 is th current question in the array and [1] is aways the correct awnser
        btn.classList.add('color-g')
        setTimeout(() => {
            fPoints(10)
            next(Number(nQuest.innerText))
        }, 1300)
    } else {
        btn.classList.add('color-r')
        fPoints(-10)
        setTimeout(() => {
            btn.classList.remove('color-r')
        }, 1200)
    }
}