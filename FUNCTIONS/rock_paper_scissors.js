const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else {
      console.log("Error!");
    }
  };
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "Game is a tie";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer Wins";
      } else {
        return "You Win";
      }
    }
  
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer Wins";
      } else {
        return "You Win";
      }
    }
  
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer Wins";
      } else {
        return "You Win";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer Wins";
      } else {
        return "You Win";
      }
    }
  }
  
  console.log(determineWinner("paper", "scissors")); // prints something like 'The computer won!'
  console.log(determineWinner("paper", "paper")); // prints something like 'The game is a tie!'
  console.log(determineWinner("paper", "rock")); // prints something like 'The user won!'
  