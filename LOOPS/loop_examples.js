// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// ...
// 9 x9

// standard loop 1

for (let i = 1; i <= 10; ++i) {
  console.log(`${i} x ${i}) = ${i * i}`);
}

console.log("end");

// standard loop 2

for (let counter = 0; counter < 11; counter++) {
  console.log(counter);
}

// reverse loop

for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

// loop in an array

const vacationSpots = ["Bali", "Paris", "Tulum"];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}

// nested loops example 1

for (let i = 0; i < 4; i++) {
  let line = "";
  for (let j = 0; j < 3; j++) {
    line += "*";
  }
  console.log(line);
}
// nested loop example 2

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log("Both arrays have the number: " + yourArray[j]);
    }
  }
}

// nested loop example 3

let bobsFollowers = ["Joe", "Marta", "Sam", "Erin"];
let tinasFollowers = ["Sam", "Marta", "Elle"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// while loop example 1

let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

// while loop example 2

const cards = ["diamond", "spade", "heart", "club"];

let currentCard = "";

while (currentCard != "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// breaks in loop example

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") break;
}
console.log("And if you don't know, now you know.");

// do while loop

let cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);
{
  console.log(cupsAdded);
}

// do while loop example 2

let password;
do {
  password = prompt("Enter your password:");
} while (password.length < 8);
