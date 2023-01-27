var idade = 22

console.log(`devo votar? tenho ${idade} anos`)

if (idade < 16) {
    console.log('não vota')
} else if (idade < 18 || idade >= 66) {
    console.log('opcional')
} else {
    console.log('obigatorio')
}