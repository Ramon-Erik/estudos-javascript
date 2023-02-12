let btnCalculate = document.querySelector('#calc')
let btnReset = document.querySelector('#resetCamps')
let divMedia = document.querySelector('#media')

function showMedia(grades) {
    divMedia.innerHTML = `
    <p>Your media: ${((grades[0]+grades[1]+grades[2])/3).toFixed(1)}</p>
    `
}

btnReset.addEventListener('click', () => {
    divMedia.innerHTML = ''
})

btnCalculate.addEventListener('click', () => {
    let grades = []
    document.querySelectorAll('.numb').forEach(element => {
        grades.push(Number(element.value))
    });
    showMedia(grades)
})