/* enunciado ex011:
As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. */

function eBisexto(ano) {
    if (ano % 4 === 0) {
        console.log(ano, 'é bisexto')
        return true
    } else if (ano % 400 === 0) {
        console.log(ano, 'é bisexto')
        return true
    } else {
        console.log(ano, 'não é bisexto')
        return false
    }
}

eBisexto(2400)
eBisexto(2096)
eBisexto(2016)
eBisexto(2024)
for (let i = 0; i < 10; i++) { eBisexto(Math.random().toFixed(4) * 10000) }