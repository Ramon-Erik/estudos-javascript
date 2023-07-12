function fun1(params) { }

const fun2 = function (params) { }

const a = [function (a,b) {return a+b}, fun1, fun2]

const obj = {}

obj.falar = function (m) {console.log(m)}
obj.falar('oi')
