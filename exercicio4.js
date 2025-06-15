//4. Fatorial Recursivo
//Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
//um Error, e n === 0 retornando 1.
const prompt = require('prompt-sync')()
function fatorial(n){
    if(n < 0){
        throw new Error("O valor deve ser um número possitivo");
    }else if(n === 0){
        return 1
    }else{
        return n * fatorial(n - 1)
    }
}

let n = parseInt(prompt("Digite um número inteiro possitivo para saber seu fatorial: "))

console.log(fatorial(n))