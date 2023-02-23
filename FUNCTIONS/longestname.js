// Prompt the user to enter a list of names
const input = prompt("Enter a list of names separated by a space:");

// Split the input into an array of names
const names = input.split(" ");

// Define a function to find the longest name
function longestName(names) {
  let longest = "";
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > longest.length) {
      longest = names[i];
    }
  }
  return longest;
}

// Find the longest name
const longest = longestName(names);

// Alert the user of the longest name
alert("The longest name is: " + longest);
