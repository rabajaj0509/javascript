const getSleepHours = day => {
  switch (day) {
    case "monday":
      return 8;
    case "tuesday":
      return 7;
    case "wednesday":
      return 4;
    case "thrusday":
      return 3.5;
    case "friday":
      return 9;
    case "saturday":
      return 12;
    case "sunday":
      return 9;
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thrusday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("User has got the perfect amount of sleep!");
    return 0;
  }
  actualSleepHours < idealSleepHours
    ? console.log(
        `User is sleep deprived by ${idealSleepHours - actualSleepHours} hours`
      )
    : console.log(
        `User slept for ${actualSleepHours - idealSleepHours} more than needed!`
      );
};

calculateSleepDebt();
