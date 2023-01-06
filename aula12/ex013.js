var diaSemana = (new Date()).getDay()

switch (diaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segundda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sexta')
        break
    default:
        console.log('[erro] '+diaSemana)
        break
}