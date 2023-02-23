let score = 45;

if (score > 85) {
  console.log("You've got an A");
}

if (score > 75 && score < 85) {
  console.log("You've got a B");
}

if (score > 50 && score < 75) {
  console.log("You've got a C");
}

if (score < 50) {
  console.log("You've got a D");
}
// 2nd task

////////////////////////////////

var pluralize = (function () {
  const vowels = "aeiou";

  function pluralize(word) {
    if (
      word.endsWith("s") ||
      word.endsWith("sh") ||
      word.endsWith("ch") ||
      word.endsWith("x") ||
      word.endsWith("z")
    ) {
      return word + "es";
    }

    if (word.endsWith("y")) {
      return word.slice(0, -1) + "ies";
    }

    return word + "s";
  }

  return pluralize;
})();

////////////////////////////////////////

console.log(pluralize("dog"));
console.log(pluralize("cat"));
console.log(pluralize("fox"));
console.log(pluralize("dwarf"));
console.log(pluralize("guy"));
console.log(pluralize("goose"));
