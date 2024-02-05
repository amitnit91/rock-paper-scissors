let win=0;
let lose=0;
let equal=0;
//function to genrate a random choice btn rock,paper and scissors
function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    if (choice===0){
        return "rock";
    }
    else if(choice===1){
        return "paper";
    }
    else if(choice===2){
        return "scissors";
    }
    
}

//function to return the winner of game btn player and computer
function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();
    switch(playerSelection){
        case "rock":{
            if(computerSelection==="rock"){
                let result="Equal! both chooses 'rock' ,so play again";
                equal++;
                return result;
            }
            else if(computerSelection==="paper"){
                let result="You lose! paper beats rock"
                lose++;
                return result;
            }
            else {
                let result="You Win! rock beats scissors"
                win++;
                return result;
            }
        }
        case "paper":{
            if(computerSelection==="rock"){
                let result="You Win! paper beats rock";
                win++;
                return result;
            }
            else if(computerSelection==="paper"){
                let result="Equal! both choose paper, so play again";
                equal++;
                return result;
            }
            else {
                let result="You Lose!, scisors beats paper";
                lose++
                return result;
            }
        }
        case "scissors":{
            if(computerSelection==="rock"){
                let result="You Lose! rock beats scissors";
                lose++;
                return result;
            }
            else if(computerSelection==="paper"){
                let result="You Win! scissors beats paper"
                win++;
                return result;
            }
            else {
                let result="Equal! both choose scissors, so play again"
                equal++;
                return result;
            }
        }
    }
    

}

//function to start this game
function playGame(){
    for(let i=0;i<5;i++){
    let computerSelection= getComputerChoice();
    let playerSelection= prompt("Enter Your Choice btn 'rock','paper','scissors");
    let winner=playRound(playerSelection,computerSelection);
    console.log(winner);
}
if(win<lose){
    console.log(`you LOSE the game, your score is win:${win}, lose:${lose}, equal:${equal}  `);
}
else if(win>lose){
console.log(`you WIN the game, your score is win:${win}, lose:${lose}, equal:${equal}  `);
}
else{
console.log(`you are Equal in the game, your score is win:${win}, lose:${lose}, equal:${equal}  `);

}
}
playGame();

