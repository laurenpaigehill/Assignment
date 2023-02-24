NUM_TRIALS = 1000;

function drawOneCard() {
  const suits = ["H"];
  const numbers = ["2", "3"];
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

// creates a variabe that .maps through every element of the hand and implements the below function

//  function is to split the elements in the array by a space and pulls the first element which is the suits

// Uses the every() method to check if every element in the suits array is equal to the first element of the array.

function isThreeOfAKind(hand) {
  const ranks = hand.map((card) => card.split(" ")[1]);

  for (let i = 0; i < ranks.length; i++) {
    const count = ranks.filter((rank) => rank === ranks[i]).length;
    if (count === 3) {
      return "You have three of a kind!";
    } else return "";
  }
}

console.log(isThreeOfAKind(hand));
