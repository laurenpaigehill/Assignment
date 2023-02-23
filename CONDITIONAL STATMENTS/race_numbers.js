let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnersAge = 12;

if (runnersAge > 18 && registeredEarly == true) {
  raceNumber += 1000;
}

if (runnersAge > 18 && registeredEarly == true) {
  console.log("Your race starts at 9.30am, your race number is " + raceNumber);
} else if (runnersAge > 18 && registeredEarly == false) {
  console.log("Your race starts at 11.00am, your race number is " + raceNumber);
} else if (runnersAge < 18) {
  console.log("Your race starts at 12.30pm, your race number is " + raceNumber);
} else {
  console.log("Please see the registration desk");
}
