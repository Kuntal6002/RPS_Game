

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
    const Rock = document.querySelector('.btn1');
    Rock.onclick = ()=>handleClick("Rock");

    const Paper = document.querySelector('.btn2');
    Paper.onclick = ()=>handleClick("Paper");

    const Scissor = document.querySelector(".btn3");
    Scissor.onclick = ()=>handleClick("Scissor");

    const result = document.querySelector(".result");  

    function playRound(humanChoice,computerChoice){
        let human = humanChoice.toLowerCase();
        let computer = computerChoice.toLowerCase();
        if (human===computer){
            result.textContent = "Draw";
        }
        else if((human=== "rock" && computer === "scissor")||(human=== "scissor" && computer === "paper")||(human==="paper" && computer==="rock") ){
            result.textContent = "Human Wins";
            humanScore++;
        }else{
            result.textContent = "Computer Wins";
            computerScore++;
        }
        let p = document.createElement("p");
        p.textContent = (`Score - You: ${humanScore} | Computer: ${computerScore}`);

        result.appendChild(p);
    }
        function handleClick(choice){
            const humanSelection = getHumanChoice(choice);
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }

    
}

playGame();



