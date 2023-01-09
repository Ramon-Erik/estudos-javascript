var horas = new Date().getHours()
console.log(horas)
var pHora = document.getElementById('hora')
var divFoto = document.getElementById('foto-horario')

pHora.innerText = `Agora são ${horas} horas.`

if (horas >= 5 && horas < 12)  {
    divFoto.style.background = '#f8df24 url(imagens/dia.jpg)'
    document.body.style.background = '#f8df24'

} else if (horas >= 12 && horas < 18 ) {
    divFoto.style.background = '#F26C09 url(imagens/tarde.jpg)'
    document.body.style.background = '#F26C09'
    
} else {
    divFoto.style.background = '#002150 url(imagens/noite.jpg)'
    document.body.style.background = '#002150'
}
