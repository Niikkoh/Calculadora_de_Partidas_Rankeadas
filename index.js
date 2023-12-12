
/*Constantes que definem o score mínimo necessário para alcançar o Rank*/

let SCORE_FOR_BRONZE = 11
let SCORE_FOR_SILVER = 21
let SCORE_FOR_GOLD = 51
let SCORE_FOR_DIAMOND = 81
let SCORE_FOR_LEGENDARY = 91
let SCORE_FOR_IMORTAL = 101

/*=======================================================================*/

 /*Ficha do rank do jogador (EXEMPLO)*/

let player = {

    score : 0,
    rank : "indefinido",
    
    victoriesMatch : 87,
    defeatMatch : 3
}

main()

/*=======================================================================*/


function main()
{
    
    /*Define o score e o rank do jogador*/

    player.score = setPlayerScore(player.victoriesMatch, player.defeatMatch)
    player.rank = setPlayerRank(player.score)

    /*Imprime a saída*/
    
    showPlayerRank(player.score, player.rank)

}

/*=======================================================================*/

   /*Calcula o rank do jogador baseado em seu score*/

function setPlayerRank (playerScore) 
{
    if(playerScore < SCORE_FOR_BRONZE)
        return "Ferro"
    else if(playerScore < SCORE_FOR_SILVER)
        return "Bronze"
    else if(playerScore < SCORE_FOR_GOLD)
        return "Prata"
    else if(playerScore < SCORE_FOR_DIAMOND)
        return "Ouro"
    else if(playerScore < SCORE_FOR_LEGENDARY)
        return "Diamante"
    else if(playerScore < SCORE_FOR_IMORTAL)
        return "Lendário"
    else
        return "Imortal"
}

   /*Imprime a saída na tela*/

function showPlayerRank (playerScore, playerRank)
{
    console.log (`O Herói tem de saldo de ${playerScore} está no nível de ${playerRank}`)
}

  /*Calcula o score do jogador através do calculo 'vitórias - derrotas' */

function setPlayerScore (victoriesMatch, defeatMatch) { return victoriesMatch - defeatMatch }