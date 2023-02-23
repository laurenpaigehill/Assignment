const num_rows = 4;
const num_columns = 10;

for (let i = 0; i < num_rows; i++) {
  let line = "";
  for (let j = 0; j < num_columns; j++) {
    line += "*";
  }
  console.log(line);
}
