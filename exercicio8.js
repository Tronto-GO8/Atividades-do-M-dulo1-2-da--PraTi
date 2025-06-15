//8. Agrupamento por Propriedade
//Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
//cada chave é um cliente e o valor é a soma de todos os seus total.

let vendas = [
    {
        cliente: "Marcos",
        total: [1500, 305, 231]
    },
    {
        cliente: "Ana",
        total: [1500, 305, 231]
    },
    {
        cliente: "chaves",
        total: [1500, 305, 231]
    },

]

function gerarCliente(vendas){
    let cliente = new Object();
    for(let i = 0; i < vendas.length; i++){
        let nome = vendas[i].cliente
        let valotTotal = Array.isArray(vendas[i].total) ? vendas[i].total.reduce((acumulador, soma) => acumulador + soma, 0): vendas[i].total
        cliente[nome] = valotTotal
    }
    console.log(cliente)
}
gerarCliente(vendas)