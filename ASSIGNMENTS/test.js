NUM_TRIALS = 10000;

function drawOneCard() {
  const suits = ["H", "C", "D", "H"];
  const numbers = [
    "2",
    "3",
  ];
  let oneSuit = Math.floor(Math.random() * suits.length);
  let oneNumber = Math.floor(Math.random() * numbers.length);
  let drawnCard = suits[oneSuit] + " " + numbers[oneNumber];
  return drawnCard;
}

function drawFiveCards() {
  let cards = [];
  while (cards.length < 2) {
    let newCard = drawOneCard();
    if (!cards.includes(newCard)) {
      cards.push(newCard);
    }
  }
  return cards;
}
const hand = drawFiveCards();
console.log(hand.join("\n"));

function isStraight(hand) {
  for (let i = 1; i < hand.length; i++) {
    if (hand[i] !== hand[i - 1] + 1) {
      return "";
    }
  }
  return "You have a Straight!";
}

console.log(isStraight(hand));

