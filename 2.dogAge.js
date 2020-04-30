/*
Convert your age from “human years” to “dog years”:
- The first two years of a dog’s life count as 10.5 dog years each.
- Each year following equates to 4 dog years.

input:22
output:101

input: 24
output: 109
*/

let myAge = 22;
const myName = "Rahul".toLowerCase();

// For the first 2 years dog’s life count as 10.5 dog years each.
// Therefore, reduce 2 years from myAge as well.
const firstTwoYears = function() {
  let earlyYears = 2;
  myAge -= earlyYears;
  return (earlyYears *= 10.5);
};

// Each year following equates to 4 dog years.
const laterYears = function() {
  const initialyear = firstTwoYears();
  myAge *= 4;
  return myAge + initialyear;
};

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${laterYears()} years old in dog years.`
);
// Output: My name is rahul. I am 24 years old in human years which is 109 years old in dog years.
