let btnCalculate = document.querySelector('#calc')
let btnReset = document.querySelector('#resetCamps')
let divMedia = document.querySelector('#media')

function showMedia(grades) {
    grades = ((grades[0]+grades[1]+grades[2])/3).toFixed(1)
    let situation
    if (grades >= 7) {
        situation = 'Approved'
        divMedia.style.backgroundColor = 'green'
    } else if (grades >= 5) {
        situation = 'Recuperation'
        divMedia.style.backgroundColor = 'yellow'
    } else {
        situation = 'Repproved'
        divMedia.style.backgroundColor = 'red'
    }

    divMedia.innerHTML = `
    <p>Your media: ${grades}<br>
    ${situation}
    </p>
    `
}

btnReset.addEventListener('click', () => {
    divMedia.style.display = 'none'
})

btnCalculate.addEventListener('click', () => {
    divMedia.style.display = 'block'
    let grades = []
    document.querySelectorAll('.numb').forEach(element => {
        grades.push(Number(element.value))
    });
    showMedia(grades)
})