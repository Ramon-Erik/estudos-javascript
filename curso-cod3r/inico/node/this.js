console.log(this === global)
// não, === module.exports

console.log(this === module)
// não, === module.exports

console.log(this === module.exports)
console.log(this === exports)
// sm, esse é o this

function logThis() {
    console.log('dentro da func')
    console.log(this === module.exports)
    console.log(this === exports)
    // não pq esta na funcao

    console.log(this === global)
    // sim
}

logThis()