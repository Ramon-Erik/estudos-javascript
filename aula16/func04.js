function fatorial(x=1) {
    let v = 1
    for (let c = 1; c <= x; c++) {
        v = v * c
    }
    return v
}

console.log(fatorial(5))