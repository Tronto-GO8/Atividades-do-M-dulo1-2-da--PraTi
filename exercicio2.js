//2. Jogo de Adivinhação
//Escreva um script que gere um número aleatório de 1 a 100 e peça ao
//usuário, para adivinhar. Use while para repetir até acertar, contando
//tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')()

let valor = Math.floor(Math.random() * 100);
let chute = null;

while(valor !== chute){
    chute = parseInt(prompt("Digite um valor inteiro entre 0 e 100: "));

    if(valor === chute){
        console.log(`Você acertou o valor é ${valor}`);
    }else if(valor < chute){
        console.log("O valor digitado é maior que o valor correto.")
    }else if(valor > chute){
        console.log("O valor digitado é menor que o valor correto.")
    }
}