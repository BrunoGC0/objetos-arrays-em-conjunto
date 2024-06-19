// let jogo1 = {
//     jogo: 'Final fantasy XIV'
// }

// let jogo2 = {
//     jogo: 'Fallout'
// }

// let videoGame = {
//     nome: 'Xbox',
//     valor: 300,
//     jogos: [jogo1, jogo2]
// }

// console.log(videoGame)

// videoGame.jogos.push('Monster Hunter World')

let cliente = {
    nome: 'Bruno',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            {nome: 'Final fantasy XIV'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)