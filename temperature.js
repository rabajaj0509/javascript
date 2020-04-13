// the forcast today is 293k
const kelvin = 293

// Celsius is 273 less than Kelvin
const kelvinToCelsius = kelvin - 273

// fahrenheit is (9/5 times Celsius) + 32
const fahrenheit = function (celsius) {
  return Math.floor(celsius * (9/5) + 32)
}

console.log(`The temperature is ${fahrenheit(kelvinToCelsius)} degrees Fahrenheit.`)
// The temperature is 68 degrees Fahrenheit.
