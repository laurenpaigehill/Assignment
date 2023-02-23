const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 8;
  } else if (day === "wednesday") {
    return 7;
  } else if (day === "thursday") {
    return 6;
  } else if (day === "friday") {
    return 3;
  } else if (day === "saturday") {
    return 10;
  } else if (day === "sunday") {
    return 9;
  }
};

const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  return [actualSleepHours, idealSleepHours];
};

const [actualSleepHours, idealSleepHours] = calculateSleepDebt();

console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week

console.log(getIdealSleepHours()); // if idealHours is 8, should print 56

if (actualSleepHours === idealSleepHours) {
  console.log("Woo you got enough sleep");
} else if (actualSleepHours < idealSleepHours) {
  console.log(
    "You got " +
      (idealSleepHours - actualSleepHours) +
      " hour(s) less sleep than you needed this week. Get some rest."
  );
} else {
  console.log("well done you loads of sleep");
}
