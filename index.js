
/*Constantes que definem o score mínimo necessário para alcançar o Rank*/

const SCORE_FOR_BRONZE = 11;
const SCORE_FOR_SILVER = 21;
const SCORE_FOR_GOLD = 51;
const SCORE_FOR_DIAMOND = 81;
const SCORE_FOR_LEGENDARY = 91;
const SCORE_FOR_IMORTAL = 101;

/*Exemplo de ficha de um jogador*/

const PLAYER_VICTORIES_MATCH_EXAMPLE = 63;
const PLAYER_DEFEAT_MATCH_EXAMPLE = 1;

/*=======================================================================*/

 /*Classe do jogador*/

class Player {

    constructor(victoriesMatch, defeatMatch)
    {
        this.victoriesMatch = victoriesMatch;
        this.defeatMatch = defeatMatch;
        this.score = 0;
        this.rank = "indefinido";
    }
    
      /*Calcula o rank do jogador baseado em seu score*/

    setPlayerRank () 
    {
        if(this.score < SCORE_FOR_BRONZE)
            this.rank = "Ferro";
        else if(this.score < SCORE_FOR_SILVER)
            this.rank = "Bronze";
        else if(this.score < SCORE_FOR_GOLD)
            this.rank = "Prata";
        else if(this.score < SCORE_FOR_DIAMOND)
            this.rank = "Ouro";
        else if(this.score < SCORE_FOR_LEGENDARY)
            this.rank = "Diamante";
        else if(this.score < SCORE_FOR_IMORTAL)
            this.rank = "Lendário";
        else
            this.rank = "Imortal";
    }

        /*Imprime a saída na tela*/

    showPlayerRank ()
    {
        console.log (`O Herói tem de saldo de ${this.score} está no nível de ${this.rank}`);
    }

        /*Calcula o score do jogador através do calculo 'vitórias - derrotas' */

    setPlayerScore () { this.score = this.victoriesMatch - this.defeatMatch; }
}

main()

/*=======================================================================*/

function main()
{
   
    /*Instanciando objeto jogador*/
    let onePlayer = new Player(PLAYER_VICTORIES_MATCH_EXAMPLE, PLAYER_DEFEAT_MATCH_EXAMPLE);
    
    /*Define o score e o rank do jogador instanciado*/

    onePlayer.setPlayerScore();
    onePlayer.setPlayerRank();

    /*Imprime a saída*/
    
    onePlayer.showPlayerRank();

}