/* enunciado ex013:
    Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function diaDaSemana(num) {
    switch (num) {
        case 1:
            console.log('Domingo, o dia que o senhor fez para nós. Alegremo-nos e nele exultemos. Fim de Semana')
            break;
        case 2:
            console.log('Segunda, dia útil')
            break;
        case 3:
            console.log('Terça, dia útil')
            break;
        case 4:
            console.log('Quinta, dia útil')
            break;
        case 5:
            console.log('Quinta, dia útil')
            break;
        case 6:
            console.log('Sexta, dia útil')
            break;
        case 7:
            console.log('Sábado. Fim de Semana')
            break;
        default:
            console.log('Dia inavalido. Tente algo entre 1 e 7')
            break;
    }
}

diaDaSemana(1)