let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 26;

if (age > 18 && registeredEarly === true) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly === true) {
  console.log(`race number(${raceNumber}): Your race is scheduled at 9:30am.`);
} else if (age > 18 && registeredEarly === false) {
  console.log(`race number(${raceNumber}): Your race is scheduled at 11:00am.`);
} else if (age < 18) {
  console.log(`race number(${raceNumber}): Your race is scheduled at 12:30am.`);
} else {
  console.log(
    `Please visit the registration desk to confirm your race schedule`
  );
}
