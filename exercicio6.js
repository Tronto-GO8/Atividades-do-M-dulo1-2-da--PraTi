//6. Memoization
//Implemente function memoize(fn) que armazene em cache chamadas
//anteriores de fn (por argumentos), retornando resultados instantâneos em
//repetidas invocações.
function memoize(fn) {
    let cache = {};

    return function(arg) {
        if (cache[arg] !== undefined) {
            console.log("Retornando do cache:", arg);
            return cache[arg];
        } else {
            let result = fn(arg);
            cache[arg] = result;
            console.log("Calculando e armazenando:", arg);
            return result;
        }
    }
}

function quadrado(x) {
    return x * x;
}

const quadradoMemo = memoize(quadrado);

console.log(quadradoMemo(5));  // Calcula
console.log(quadradoMemo(5));  // Cache
console.log(quadradoMemo(6));  // Calcula
console.log(quadradoMemo(6));  // Cache
