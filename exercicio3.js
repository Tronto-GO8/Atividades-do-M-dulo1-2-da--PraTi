//3. Palavras Únicas
//Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
//todas as palavras únicas e exibi-las em um array.

const prompt = require('prompt-sync')()

function inuck(arr){
    let palavras = (arr.toLowerCase()).split(" ")
    let palavras_unicas = []
    for(let i = 0; i < palavras.length; i++){
        if(!palavras_unicas.includes(palavras[i])){
           palavras_unicas.push(palavras[i])
        }
    }
    return palavras_unicas;
}


let texto_repetido = String(prompt("Digite um texto repetido: "));

console.log(inuck(texto_repetido))
