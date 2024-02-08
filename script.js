/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2) {
    let play1 = player1.toLowerCase(); 
    let play2 = player2.toLowerCase();
    
    if(play1 == play2){
        return "Empate!"
    }else if(play1 == "pedra") {
        if(play2 == "papel") {
            return "Jogador 2 venceu!"
        }else if(play2 == "tesoura") {
            return "Jogador 1 venceu!"
        }
    }else if (play1 == "papel") {
        if(play2 == "pedra") {
            return "Jogador 1 venceu!"
        }else if(play2 = "tesoura") {
            return "Jogador 2 venceu!"
        }
    }else if (play1 == "tesoura") {
        if (play2 == "pedra") {
            return "Jogador 2 venceu!"
        }else {
            (play2 == "papel")
            return "Jogador 1 venceu!"
        }
    }
}

 const result = playRockPaperScissor("PEDRA", "Tesoura")
 console.log(result);