/*
1) Variables hold reusable data in a program and associate it with a name.
2) Variables are stored in memory.
3) The var keyword is used in pre-ES6 versions of JS.
4) `let` is the preferred way to declare a variable when it can be reassigned,
and const is the preferred way to declare a variable with a constant value.
5) Variables that have not been initialized store the primitive data type `undefined`.
6) Mathematical assignment operators make it easy to calculate a new value
and assign it to the same variable.
7) The + operator is used to concatenate strings including string values held in variables
8) In ES6, template literals use backticks ` and ${} to interpolate values into a string.
9) The `typeof` keyword returns the data type (as a string) of a value.
*/

/*
Example:

Convert Kelvin to Celsius, then to Fahrenheit
For example, 283 K converts to 10 °C which converts to 50 °F.

input: 293 Kelvin
outout: 68 degrees Fahrenheit
*/

// the forcast today is 293k
const kelvin = 293;

// Celsius is 273 less than Kelvin
const kelvinToCelsius = kelvin - 273;

// fahrenheit is (9/5 times Celsius) + 32
const fahrenheit = function(celsius) {
  return Math.floor(celsius * (9 / 5) + 32);
};

console.log(
  `The temperature is ${fahrenheit(kelvinToCelsius)} degrees Fahrenheit.`
);
// The temperature is 68 degrees Fahrenheit.
