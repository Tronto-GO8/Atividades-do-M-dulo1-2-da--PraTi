//7. Mapeamento e Ordenação
//Dado um array produtos = [{ nome, preco }, ...], crie uma função que
//retorne um novo array apenas com os nomes, ordenados por preço
//crescente, usando map, sort.
let produtos = [
    {nome: "maça", valor: 10}, 
    {nome: "laranja", valor: 12},
    {nome: "pecego", valor: 50},
    {nome: "uva", valor: 3}
]
function ordenar(produtos){
    let produtosOrdenado = produtos.sort((a,b) => a.valor - b.valor).map(produtos => produtos.nome)
    console.log(produtosOrdenado)
}
ordenar(produtos)