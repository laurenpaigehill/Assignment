function createDiamond(size) {
  var diamond = "";
  var mid = Math.floor(size / 2);

  for (var i = 0; i <= mid; i++) {
    for (var j = 0; j < size - i; j++) {
      diamond += " ";
    }
    for (var k = 0; k < 2 * i + 1; k++) {
      diamond += "*";
    }
    diamond += "\n";
  }

  for (var i = mid - 1; i >= 0; i--) {
    for (var j = 0; j < size - i; j++) {
      diamond += " ";
    }
    for (var k = 0; k < 2 * i + 1; k++) {
      diamond += "*";
    }
    diamond += "\n";
  }

  console.log(diamond);
}

createDiamond(7);
