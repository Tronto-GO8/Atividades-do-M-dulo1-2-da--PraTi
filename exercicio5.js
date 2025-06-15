//5. Debounce
//Crie function debounce(fn, delay) que receba uma função fn e um delay
//em ms, retornando uma nova função que só executa fn se não for
//chamada novamente dentro do intervalo.

let tempoDeParada = null
function debounce(fn, delay) {
    clearTimeout(tempoDeParada);
    tempoDeParada = setTimeout(() => {fn();}, delay);
}

function comprimento() {
    console.log("Olá, leitor");
}

debounce(comprimento, 1000);  
debounce(comprimento, 3000); 
debounce(comprimento, 3000);  