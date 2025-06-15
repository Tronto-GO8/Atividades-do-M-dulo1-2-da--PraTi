//9. Conversão Entre Formatos
//Escreva duas funções:
//○ paresParaObjeto(pares) recebe um array de pares [ [chave,
//valor], ... ] e retorna o objeto equivalente.
//○ objetoParaPares(obj) faz o inverso, retornando um array de
//pares.

let pares = [['teclado', '1500'], ['sabonete', '650']]

function paresParaObjeto(pares){
    let obj = new Object();
    for(let i = 0; i < pares.length; i++){
        let chave = pares[i][0];
        let nome = pares[i][1];
        obj[chave] = nome  
    }
    console.log(obj)
    objetoParaPares(obj)
}


function objetoParaPares(obj){
    let refazerPares = []
    for (let chave in obj) {
        refazerPares.push([chave, obj[chave]])
    }
    console.log(refazerPares)
}

paresParaObjeto(pares)