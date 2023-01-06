var hora = (new Date()).getHours()

console.log(`Agora são ${hora}:00 horas.`)

if (hora >= 18) {
    console.log('Boa noite')
} else if (hora >= 12) {
    console.log('Boa tarde')
} else if (hora >= 0 && hora <= 5) {
    console.log('Boa madrugada')
} else {
    console.log('Bom dia')
}