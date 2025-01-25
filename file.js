(function() {

    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";


    function playGame() {
        let humanScore = 0;
        let computerScore = 0;

        function playRound() {

            function getComputerChoice() {
                function getRandomInt(max) {
                    return Math.floor(Math.random() * max)
                }
                let exp = getRandomInt(3);
                if (exp === 0) {
                    return rock;
                } else if (exp === 1) {
                    return paper;
                } else if (exp === 2) {
                    return scissors;
                }
            }

            function getHumanChoice() {
                let msg = prompt("rock, paper or scissors");
                if (msg.toLowerCase() === "rock") {
                    return rock;
                } else if (msg.toLowerCase() === "paper") {
                    return paper;
                } else if (msg.toLowerCase() === "scissors") {
                    return scissors;
                } else {
                    alert("Invalid! Choose rock, paper or scissors!");
                    return getHumanChoice();
                }
            }

            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            if (humanSelection === rock && computerSelection === scissors) {
                console.log("you won");
                humanScore++;
            }
            if (humanSelection === paper && computerSelection === rock) {
                console.log("you won");
                humanScore++;
            }
            if (humanSelection === scissors && computerSelection === paper) {
                console.log("you won");
                humanScore++;
            }
            if (humanSelection === rock && computerSelection === paper) {
                console.log("you lost");
                computerScore++;
            }
            if (humanSelection === paper && computerSelection === scissors) {
                console.log("you lost");
                computerScore++;
            }
            if (humanSelection === scissors && computerSelection === rock) {
                console.log("you lost");
                computerScore++;
            }
            if (humanSelection === rock && computerSelection === rock) {
                console.log("tie");
            }
            if (humanSelection === paper && computerSelection === paper) {
                console.log("tie");
            }
            if (humanSelection === scissors && computerSelection === scissors) {
                console.log("tie");
            }
        }
        for (let i = 0; i < 5; i++) {
            playRound();
            console.log(humanScore, computerScore);
        }
        console.log(`Final Scores: ${humanScore}, ${computerScore}`);
        if (humanScore > computerScore) {
            console.log("You are the winner!")
        } else if (humanScore < computerScore) {
            console.log("Computer is the winner!")
        } else {
            console.log("It's a tie!")
        }
    }
    playGame()

})();


