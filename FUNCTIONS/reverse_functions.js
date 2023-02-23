//1.Write a JavaScript function that reverse a number

function reverseNumber(num) {
  let numString = num.toString();
  // convert number into string
  let reversedString = numString.split("").reverse().join("");
  // split string into single substrings, reverse the array and then rejoin it together

  return reversedString;
  // return the reversed string
}
console.log(reverseNumber(6383734));
// should print out 4373836

// 2.Write a JavaScript function that checks whether a passed string is palindrome or not?

function isPalindrome(str) {
  str = str.replace(" ", "");
  // replace orignal string with new string that removes the gaps
  let reversedString = str.split("").reverse().join("").toLowerCase();
  // create new variable that splits the oringal string into substrings, reverse the array and then rejoin it together and makes it all lower case
  if (str.toLowerCase() === reversedString) {
    return "This is a Palindrome";
  } else {
    return "This is NOT Palindrome";
  }
  // create if statement that takes the string makes it lower case and compares it to reversed string variable
}
console.log(isPalindrome("nurses run"));
// should print This is a Palindrome

// 3. Write a JavaScript function that generates all combinations of a string.

function Combinations(str) {
  let possibleCombinations = [];
  // create array to push all possible combinations

  for (let i = 0; i < str.length; i++) {
    // create for loop to loop through each possible combination
    for (let j = i + 1; j <= str.length; j++) {
      let otherStr = str.slice(i, j);
      possibleCombinations.push(otherStr);
    } // push the string to the empty array
  }
  return possibleCombinations;
}
console.log(Combinations("dog"));
// should print d,do,dog,o,og,g

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order

function alphabetical(str) {
  return str.split("").sort().join("");
}
console.log(alphabetical("hello"));

// 5.  Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function toUpperCase(str) {
  let newStr = str[0].toUpperCase() + str.slice(1);
  // create new string that pulls first index and converts to upper case letter. Then slice the rest of the string to add to the new string but start from the second index
  return newStr;
}

console.log(toUpperCase("lauren"));


//  6.Write a JavaScript function that accepts a string as a parameter and find the longest word within the string (unfinished)

function(str){ 

  let words = str.split("")



}