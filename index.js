
function getComputerChoice(){
    const choices = ["Rock","Paper","Scissor"];
    const result = Math.floor(Math.random()*choices.length);
    return choices[result];

}

function getHumanChoice(){
    let humanChoice = prompt("Enter Your Choice");
    return humanChoice;
}
function playGame(){
    let humanScore = 0;
    let computerScore = 0;    
    function playRound(humanChoice,computerChoice){
        let human = humanChoice.toLowerCase();
        let computer = computerChoice.toLowerCase();
        if (human===computer){
            console.log("Draw");
        }
        else if((human=== "rock" && computer === "scissor")||(human=== "scissor" && computer === "paper")||(human==="paper" && computer==="rock") ){
            console.log("Human Wins");
            humanScore++;
        }else{
            console.log("Computer Wins");
            computerScore++;
        }
    }
    for(let i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();



