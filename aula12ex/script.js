var horas = new Date().getHours()
console.log(horas)
var pHora = document.getElementById('hora')

pHora.innerText = `<p>Agora são ${horas} horas.</p>`