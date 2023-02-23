// Shapes Task

function drawShape(shape, size) {
  switch (shape) {
    case "square":
      for (let i = 0; i < size; i++) {
        console.log("*".repeat(size));
      }
      break;

    case "triangle":
      let asterixAmount = 1;
      for (let i = 0; i < size; i++) {
        let row = " ".repeat(size - i);
        row += "*".repeat(asterixAmount);
        asterixAmount += 2;
        console.log(row);
      }
      break;
    case "diamond":
      let asterixAmounts = 1;

      for (let i = 0; i < size; i++) {
        let row = " ".repeat(size - i);
        row += "*".repeat(asterixAmounts);
        asterixAmounts += 2;
        console.log(row);
      }
      let bottomAsterix = asterixAmounts - 4;
      for (let i = 0; i < size - 1; i++) {
        let row = " ".repeat(i + 2);
        row += "*".repeat(bottomAsterix);
        bottomAsterix -= 2;
        console.log(row);
      }
      break;
  }
}

drawShape("diamond", 5);
