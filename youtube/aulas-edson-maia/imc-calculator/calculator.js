function calculateBMI(event) {
    event.preventDefault()
    let w = Number(document.querySelector('#iWeight').value)
    let h = Number(document.querySelector('#iHeight').value) / 100
    if (w > 0 && h >= 1 && h < 2 ) {
        let bmi = (w / (h * h)).toFixed(1)
        let textArea = document.querySelector('#iImc')
        textArea.rows = 2
        textArea.value = `Your BMI: ${bmi}
Status: ${bmiStatus(Number(bmi))}`
    } else {
        alert('Please place the values correctly')
    }
}

function bmiStatus(bmi) {
    let result
    if (bmi <= 18.5) {
        result = 'underweight'
    } else if (18.5 < bmi < 24.9) {
        result = 'normal'
    } else if (25 >= bmi >= 29.9) {
        result = 'overwight'
    } else {
        result = 'obesity'
    }
    return result
}