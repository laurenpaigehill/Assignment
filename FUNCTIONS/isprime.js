// Prompt the user to enter an integer
let num = parseInt(prompt("Enter an number"));

// Function to check if a number is prime or not
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

// Check if the entered number is prime or not

if (isPrime(num)) {
  console.log(num + " is a prime number");
} else {
  console.log(num + " is not a prime number");
}

// loop body
// for (initialization; condition; iteration) {
