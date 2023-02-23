function drawFiveCards() {
  const suits = ["H", "S", "C", "D"];
  const numbers = ["2", "3", "4", "5", "6"];
  const hand = [];

  // iterate 5 times

  for (let i = 0; i < 5; i++) {
    let suit = Math.floor(Math.random() * suits.length);
    let number = Math.floor(Math.random() * numbers.length);

    hand.push(suits[suit] + numbers[number]);
  }

  return hand;
}

const hand = drawFiveCards();
console.log(hand.join(" "));
