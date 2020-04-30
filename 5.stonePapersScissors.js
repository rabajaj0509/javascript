/*
Rock paper scissors is a classic two player game. Each player chooses either
rock, paper, or scissors. The items are compared, and whichever player chooses
the more powerful item wins.

The possible outcomes are:

- Rock destroys scissors.
- Scissors cut paper.
- Paper covers rock.
- If there’s a tie, then the game ends in a draw.
*/

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    console.log(`User chose: ${userInput}`);
    return userInput;
  } else {
    console.log("Please select a valid option");
  }
};

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      console.log("Computer chose: rock");
      return "rock";
    case 1:
      console.log("Computer chose: scissors");
      return "scissors";
    case 2:
      console.log("Computer chose: paper");
      return "paper";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    console.log("The game was a tie. Play again!");
  }
  if (userChoice == "paper") {
    if (computerChoice === "rock") {
      console.log("User wins!");
    } else if (computerChoice === "scissors") {
      console.log("Computer wins!");
    }
  }

  if (userChoice == "rock") {
    if (computerChoice === "scissors") {
      console.log("User wins!");
    } else if (computerChoice === "paper") {
      console.log("Computer wins!");
    }
  }

  if (userChoice == "scissors") {
    if (computerChoice === "paper") {
      console.log("User wins!");
    } else if (computerChoice === "rock") {
      console.log("Computer wins!");
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  determineWinner(userChoice, computerChoice);
};

playGame();
