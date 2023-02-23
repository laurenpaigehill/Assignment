const input = "Hello my name is Muna moo moo";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      if ((input[i] === "e", "u")) {
        resultArray.push(input[i]);
      }
    }
  }
}

let resultString = resultArray.join("").toUpperCase();

console.log("Vowels found: " + resultString);