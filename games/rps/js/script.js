let playerScore = 0;
let compScore = 0;
let rounds = 0;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click",()=>playGame('rock'));
paperBtn.addEventListener("click",()=>playGame('paper'));
scissorsBtn.addEventListener("click",()=>playGame('scissors'));

let playerScoreBoard = document.getElementById("playerScore");
let computerScoreBoard = document.getElementById("computerScore");
const romanNumerals = ["0","I","II","III","IV","V"];

playerScoreBoard.innerText = ("Player: "+romanNumerals[playerScore]);
computerScoreBoard.innerText = ("Computer: "+romanNumerals[compScore]);

let choices = document.getElementsByClassName("playerChoice");

function playGame(playerChoice){
        if(compScore<5 && playerScore<5){
        let computerChoice = computer();
        let winner = playRound(playerChoice,computerChoice);
        if(winner == 'player'){
            playerScore++;
        }else if(winner == 'computer'){
            compScore++;
    }   playerScoreBoard.innerText = ("Player: "+romanNumerals[playerScore]);
        computerScoreBoard.innerText = ("Computer: "+romanNumerals[compScore]);   
    console.log(computerChoice+" "+playerChoice);
        rounds++;
        
            if(playerScore==5){
                gameOver('player');
            }else if(compScore == 5){
                gameOver('computer');
            }
        }
        
    

    
}
function gameOver(winner){

}
function computer(){
    let comp = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    if(comp == 1){
        return 'rock';
    }else if(comp == 2){
        return 'paper';
    }else{
        return 'scissors';
    }
}
function playRound(player,computer){
    if(player == "rock"){
        if(computer == "rock"){
            return "draw";
        }else if(computer == "paper"){
            return "computer";
        }else{
            return "player";
        }
    }else if(player == "paper"){
        if(computer == "paper"){
            return "draw";
        }else if(computer == "rock"){
            return "player";
        }else{
            return "computer";
        }
    }else{
        if(computer == "paper"){
            return "player";
        }else if (computer == "rock"){
            return "computer";
        }else{
            return "draw";
        }
    }
}