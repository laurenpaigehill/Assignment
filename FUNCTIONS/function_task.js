// original code

function findMaxLength(array) {
  let maxLength = 0;
  for (item of array) {
    if (item.length > max) {
      maxLength = item.length;
    }
  }
  return maxLength;
}
// anonymous function

let findMaxLength = function (array) {
  let maxLength = 0;
  for (item of array) {
    if (item.length > maxLength) {
      maxLength = item.length;
    }
  }
  return maxLength;
};

// arrow function

let findMaxLength = (array) => {
  let maxLength = 0;
  for (item of array) {
    if (item.length > maxLength) {
      maxLength = item.length;
    }
  }
  return maxLength;
};

// write this as a normal function

// factorial = n => n<=1 ? 1 : n * factorial(n-1);

function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(5, factorial);


/**
 * 
 * @param {*} first 
 * @param {*} second 
 * @param  {...any} args 
 */
function sum(first, second,  ...args)