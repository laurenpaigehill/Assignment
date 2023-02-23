const suits = ["H", "S", "C", "D"];
const numbers = ["2", "3", "4", "5", "6"];

// The first line of code declares a new function called "drawOneCard".
// Inside the function, two variables are declared: "oneSuit" and "oneNumber". Each variable is assigned a random integer value using the "Math.random()" and "Math.floor()" methods.
// The "suits" and "numbers" arrays are used to select the suit and number of the playing card. The "suits" array contains the four suits in a deck of cards (clubs, diamonds, hearts, and spades), and the "numbers" array contains the numbers or face values (Ace, 2-10, Jack, Queen, King).
// The "drawnCard" variable combines the selected suit and number to form the name of the randomly selected card.
//Finally, the "drawnCard" variable is returned from the function.
// So, when the "drawOneCard" function is called, it will randomly select a suit and number from the "suits" and "numbers" arrays, combine them to form the name of a playing card, and return the name of the card as a string.

function drawOneCard() {
  let oneSuit = Math.floor(Math.random() * suits.length);
  let oneNumber = Math.floor(Math.random() * numbers.length);
  let drawnCard = suits[oneSuit] + numbers[oneNumber];
  return drawnCard;
}

// The below function starts by creating an empty array called "cards".
// Then it enters a "while" loop that will continue to run as long as the length of the "cards" array is less than 5.
// Inside the "while" loop, the function calls another function called "drawOneCard()" to get a new playing card.
// The "if" statement checks if the new card is already included in the "cards" array using the "includes" method. If the new card is not already in the array, the "push" method is used to add it to the "cards" array.
// The "while" loop will continue to run until the "cards" array has 5 unique playing cards.
//Finally, the function returns the "cards" array.
//So when you call the "drawFiveCards" function, it will execute the steps above to return an array of five unique playing cards.

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
