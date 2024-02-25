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
    for(let i=0;i<5;i++){
        let computerSelection=getComputerChoice();
        let playerSelection=prompt("enter 'rock','paper' or 'scissor'");
        playerSelection=playerSelection.toLowerCase();

        if((playerSelection==='rock')||(playerSelection==='paper')||(playerSelection==='scissor')){
            console.log(playRound(playerSelection,computerSelection));
        }
        else{
        alert("Wrong input,Enter correct choise");
        }
        
    }
    if(win>lose){
        console.log(`You WIN the game,with score -win:${win}, lose:${lose}, tie:${tie}`);
    }
    else if(win<lose){
        console.log(`You LOSE the game,with score -win:${win}, lose:${lose}, tie:${tie}`);

    }
    else{
        console.log(`Game is a TIE, with score -win:${win}, lose:${lose}, tie:${tie}`);

    }
}

playGame();