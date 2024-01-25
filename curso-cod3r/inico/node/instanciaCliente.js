const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');
const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

// cache
contadorA.inc()
contadorA.inc()
contadorA.inc()
contadorA.inc()
console.log(contadorB)

// factory
contadorC.inc()
contadorC.inc()
contadorC.inc()
contadorC.inc()
console.log(contadorD)
console.log(contadorC)
