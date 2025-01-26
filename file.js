(function() {

    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    const rockEl = document.querySelector(".rock");
    const paperEl = document.querySelector(".paper");
    const scissorEl = document.querySelector(".scissors");

    const resultEl = document.querySelector(".main-result");



    function playGame() {
        let humanScore = 0;
        let computerScore = 0;



        function playRound(event) {

            function getComputerChoice() {
                const choices = [rock, paper, scissors]
                return choices[Math.floor(Math.random() * choices.length)];
            }

            function getHumanChoice() {
                return event.target.classList.contains("rock")
                ? rock : event.target.classList.contains("paper")
                ? paper : scissors
            }

            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            console.log("Human chose: " + humanSelection);
            console.log("Computer chose:  " + computerSelection);

            if (humanSelection === rock && computerSelection === scissors ||
            humanSelection === paper && computerSelection === rock ||
            humanSelection === scissors && computerSelection === paper) {
                console.log("You won the round");
                humanScore++;
            } else if (humanSelection === computerSelection) {
                console.log("tie")
            } else {
                console.log("You lost the round");
                computerScore++;
            }
            if (humanScore === 5 || computerScore === 5) {
                resultEl.innerText = `Final Scores: human: ${humanScore}, computer: ${computerScore}` ;
                if (humanScore > computerScore) {
                    resultEl.innerHTML += "<br> Human is the winner!"
                } else if (humanScore < computerScore) {
                    resultEl.innerHTML += "<br> Computer is the winner!"
                } else if (humanScore === computerScore){
                    resultEl.innerHTML += "<br> It's a tie!"
                }
                humanScore = 0;
                computerScore = 0;
            } else {resultEl.innerHTML = ""}
        }


        rockEl.addEventListener("click", playRound)
        paperEl.addEventListener("click", playRound)
        scissorEl.addEventListener("click", playRound)
    }
    playGame()

})();


