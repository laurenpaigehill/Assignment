NUM_TRIALS = [""];

function drawOneCard() {
  const suits = ["H", "D", "S", "C"];
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let oneSuit = Math.floor(Math.random() * suits.length);
  let oneNumber = Math.floor(Math.random() * numbers.length);
  let drawnCard = suits[oneSuit] + " " + numbers[oneNumber];
  return drawnCard;
}

function drawFiveCards() {
  let cards = [];
  while (cards.length < 5) {
    let newCard = drawOneCard();
    if (!cards.includes(newCard)) {
      cards.push(newCard);
    }
  }
  return cards;
}
const hand = drawFiveCards();
console.log(hand.join("\n"));

// Define a function to check if a hand is a flush

function isFlush(hand) {
  const suits = hand.map(function (card) {
    // creates a variabe that .maps through every element of the hand and implements the below function
    return card.split(" ")[0]; //  function is to split the elements in the array by a space and pulls the first element which is the suits
  });
  if (
    suits.every(function (suit) {
      return suit === suits[0]; // Uses the every() method to check if every element in the suits array is equal to the first element of the array.
    })
  ) {
    console.log("You have a flush!");
    return true;
  } else {
    return "";
  }
}

console.log(isFlush(hand));

// Define a function for three of a kind

function hasThreeOfAKind(hand) {
  const ranks = hand.map((card) => card.split(" ")[1]);

  for (let i = 0; i < ranks.length; i++) {
    const count = ranks.filter((rank) => rank === ranks[i]).length;
    if (count === 3) {
      console.log("You have three of a kind!");
      return true;
    } else return "";
  }
}

console.log(hasThreeOfAKind(hand));

// Define a function for four of a kind

function hasFourOfAKind(hand) {
  const ranks = hand.map((card) => card.split(" ")[1]);

  for (let i = 0; i < ranks.length; i++) {
    const count = ranks.filter((rank) => rank === ranks[i]).length;
    if (count === 4) {
      console.log("You have four of a kind!");
      return true;
    } else return "";
  }
}

console.log(hasFourOfAKind(hand));

// Define function for a Full House

function fullHouse(hand) {
  const ranks = hand.map((card) => card.split(" ")[1]);

  for (let i = 0; i < ranks.length; i++) {
    const count = ranks.filter((rank) => rank === ranks[i]).length;
    if (count === 3) {
      for (let j = 0; j < ranks.length; j++) {
        if (j !== i && ranks[j] === ranks[i] && j === 2) {
          console.log("You have a full house");
          return true;
        }
      }
    }
  }

  return "";
}

console.log(fullHouse(hand));

// const lastElement = numbers.pop();

// Define function for a Straight

function isStraight(hand) {
  for (let i = 1; i < hand.length; i++) {
    // loops through the array and compares each index to the previous one to check if its one greater
    if (hand[i] !== hand[i - 1] + 1) {
      return false;
    }
  }
  return "You have a Straight!";
}

// Define function for a Straight Flush

function isStraightFlush(hand) {
  const suits = hand.map(function (card) {
    return card.split(" ")[0];
  });
  if (
    suits.every(function (suit) {
      return suit === suits[0];
    })
  )
    for (let i = 1; i < hand.length; i++) {
      if (hand[i] === hand[i - 1] + 1) {
        return "You have a Straight Flush!";
      } else return "";
    }
}
console.log(isStraightFlush(hand));
