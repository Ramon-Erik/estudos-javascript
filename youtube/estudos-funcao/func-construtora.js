function Ventilador(velMax) {
    this.velocidadeMaxima = velMax
    this.ligado = false
}

// construindo um objeto
const ventilador1 = new Ventilador(4)
const ventilador2 = new Ventilador(2)

ventilador1.cor = 'verde'
ventilador1.ligaDesliga = function() {
    if (this.ligado) {
        this.ligado = false
    } else {
        this.ligado = true
    }
}

console.log(ventilador1.ligado)
ventilador1.ligaDesliga()
console.log(ventilador1.ligado)
console.log(ventilador1.cor)

// em caso de varios objetos ventilador, para acessar a raiz (herança)
// podemos usar o prototype

function liga() {
    this.ligado = true
}

ventilador1.prototype.ligado = liga