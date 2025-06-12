const Rock = document.querySelector('.btn1');
Rock.onclick = ()=>getHumanChoice("Rock");
const Paper = document.querySelector('.btn2');
Paper.onclick = ()=>getHumanChoice("Paper");
const Scissor = document.querySelector(".btn3");
Scissor.onclick = ()=>getHumanChoice("Scissor");

function getComputerChoice(){
    const choices = ["Rock","Paper","Scissor"];
    const result = Math.floor(Math.random()*choices.length);
    return choices[result];

}

function getHumanChoice(input){
    let humanChoice = input;
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
    
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    
}

playGame();



