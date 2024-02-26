let win=0;
let lose=0;
let tie=0;

//function for computer choise
function getComputerChoice(){
    let choise=['rock','paper','scissor'];
    let result=Math.floor(Math.random()*choise.length);
    return choise[result];
}

//function to play rock paper scissor and decide the winner of round
function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();

    if(playerSelection===computerSelection){
        tie++;
        return "it is a TIE"
    }
    else if(
        (playerSelection==="rock" && computerSelection ==="scissor")||
        (playerSelection==="paper"&& computerSelection === "rock")||
        (playerSelection==="scissor"&& computerSelection==="paper") 
    ){
        win++;
        return `You WIN! ${playerSelection} beats ${computerSelection}`; 
    }
    else{
        lose++;
        return `You LOSE! ${computerSelection} beats ${playerSelection}`; 
        
    }

}

//function to play this game
function playGame(){
    const btn=document.querySelectorAll('.btn');
    const displayResult=document.querySelector('#display-result');
    for(val of btn){
        val.addEventListener('click',function(event){
            let playerSelection=event.target.name;
            let computerSelection=getComputerChoice();
            let roundResult=playRound(playerSelection,computerSelection);
            console.log(roundResult,win,lose);
            displayResult.textContent=roundResult;
        });
    }       
    
    if(win===5){
        displayResult.textContent=`You WIN the game,with score -win:${win}, lose:${lose}, tie:${tie}`;
        return;
    }
    else if(lose===5){
        displayResult.textContent=`You LOSE the game,with score -win:${win}, lose:${lose}, tie:${tie}`;
        return;
    }
    else if(win===5 && lose===5){
        displayResult.textContent=`Game is a TIE, with score -win:${win}, lose:${lose}, tie:${tie}`;
        return;
    }
}

playGame();