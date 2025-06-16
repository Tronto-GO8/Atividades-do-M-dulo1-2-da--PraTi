//6. Memoization
//Implemente function memoize(fn) que armazene em cache chamadas
//anteriores de fn (por argumentos), retornando resultados instantâneos em
//repetidas invocações.
let cache = {};
function memoize(fn) {
    return function(arg) {
        if (cache[arg] !== undefined) {
            return cache[arg];
        } else {
            let result = fn(arg);
            cache[arg] = result;
            return result;
        }
    }
}

function quadrado(x) {
    return x * x;
}

const quadradoMemo = memoize(quadrado);

console.log(quadradoMemo(25));  
console.log(quadradoMemo(5));  
console.log(quadradoMemo(25)); 
console.log(quadradoMemo(6));  
console.log(quadradoMemo(6));  