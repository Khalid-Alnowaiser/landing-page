//rock paper scissors :)


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