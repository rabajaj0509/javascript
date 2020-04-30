/*
You have been hired to write a program that will register runners
for the race and give them instructions on race day.

Here’s how our registration works. There are adult runners (over 18 years of age)
and youth runners (under 18 years of age). They can register early or late.
Runners are assigned a race number and start time based on their age and registration.

* Race number:
- Early adults receive a race number at or above 1000.
- All others receive a number below 1000.

* Start time:
Adult registrants run at 9:30 am or 11:00 am.
- Early adults run at 9:30 am.
- Late adults run at 11:00 am.

* Youth registrants run at 12:30 pm (regardless of registration).
*/

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
