//5. Debounce
//Crie function debounce(fn, delay) que receba uma função fn e um delay
//em ms, retornando uma nova função que só executa fn se não for
//chamada novamente dentro do intervalo.


function debounce(fn, delay) {
    let tempoDeParada = null;

    return function(...args) {
        clearTimeout(tempoDeParada);

        tempoDeParada = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

function comprimento() {
    console.log("Olá, leitor");
}

const debouncedComprimento = debounce(comprimento, 1000);

// Teste do debounce
debouncedComprimento();
debouncedComprimento();
debouncedComprimento();
