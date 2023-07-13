function Carro(velocidadeMaxima=200, delta = 5) {
    let velocidadeAtual = 0
    this.acelerar = function () {
        if (velocidadeAtual+delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeAtual
        }
    }

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}