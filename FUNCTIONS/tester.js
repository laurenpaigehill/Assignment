function drawOneCard() {
    let oneSuit = Math.floor(Math.random() * suits.length);
    let oneNumber = Math.floor(Math.random() * numbers.length);
    let drawnCard = suits[oneSuit] + numbers[oneNumber];
    return drawnCard;
  
      let cards = [];
      while (cards.length < 5) {
        let newCard = drawOneCard();
        if (!cards.includes(newCard)) {
          cards.push(newCard);
        }
      }
      return cards;
    
  }

  const hand = drawOneCard();
console.log(hand.join("\n"));