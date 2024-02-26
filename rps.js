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
    const player=document.querySelector('#player');
    const computer=document.querySelector('#computer');
    for(val of btn){
        val.addEventListener('click',function(event){
           if(win<5 && lose<5){
            let playerSelection=event.target.name;
            let computerSelection=getComputerChoice();
            let roundResult=playRound(playerSelection,computerSelection);
            console.log(roundResult,win,lose);
            player.textContent=`Player :${win}`
            computer.textContent=`Computer :${lose}`;
            displayResult.textContent=roundResult;
           }
            if(win===5){
                displayResult.textContent=`You WIN the game,with score :- win:${win}, lose:${lose}, tie:${tie} ,Play Again `;
                return;
            }
            else if(lose===5){
                displayResult.textContent=`You LOSE the game,with score :- win:${win}, lose:${lose}, tie:${tie} ,Play Again `;
                return;
            }
            else if(win===5 && lose===5){
                displayResult.textContent=`Game is a TIE, with score :- win:${win}, lose:${lose}, tie:${tie} ,Play Again `;
            return;
            }    
                     
        });
         
   
}
        
    }   
    
    function playAgain(){
        const playBtn=document.querySelector('#play-again');
        // playBtn.addEventListener('click',function(e){
            const player=document.querySelector('#player');
            const computer=document.querySelector('#computer');
            const displayResult=document.querySelector('#display-result');
            win=0;lose=0;tie=0;
            player.textContent=`Player :${win}`
            computer.textContent=`Computer :${lose}`;
            displayResult.textContent="click  your choice";
            e.stopPropagation();
            
        // });

    }
   

playGame();