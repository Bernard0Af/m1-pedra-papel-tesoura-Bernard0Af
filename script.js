/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2) {
    let play1 = player1.toLowerCase(); 
    let play2 = player2.toLowerCase();
    
    if(play1 === play2) {
        return "Empate!"
    }else if (play1 === "pedra" && play2 === "papel" || play1 === "papel" && play2 === "tesoura" || play1 === "tesoura" && play2 === "pedra") {
        return "Jogador 2 venceu!"
    }else {
        (play2 === "pedra" && play1 === "papel" || play2 === "papel" && play1 === "tesoura" || play2 === "tesoura" && play1 === "pedra")
            return "Jogador 1 venceu!"
    }
}


 const result = playRockPaperScissor("PEDRA", "papel")
 console.log(result);