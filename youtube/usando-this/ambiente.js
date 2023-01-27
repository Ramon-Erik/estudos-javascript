function thisBindEx() {
    console.log(this)
}

const obj = {exmplo: 'ex'}

thisBindEx = thisBindEx.bind(obj)

thisBindEx()

// https://www.w3schools.com/js/js_function_bind.asp