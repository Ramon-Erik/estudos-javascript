let btnCalculate = document.querySelector('#calc')

btnCalculate.addEventListener('click', () => {
    let grades = []
    for (let c = 0; c <= 3; c++) {
        grades.push(...grades, document.querySelectorAll('.numb')[c])
    }
    console.log(grades)
}
)
