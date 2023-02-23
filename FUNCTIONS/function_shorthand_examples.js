// standard version

function logKey(event) {
  console.log(`The key being pressed is ${event.key}`);
}
// level one - shorthand (helps stop errors)

let logkey = function (event) {
  console.log(`The key being pressed is ${event.key}`);
};

// level two shorthand (used widely in objects)

let logkey3 = (event) => console.log(`The key being pressed is ${event.key}.`);

console.log("hello");
