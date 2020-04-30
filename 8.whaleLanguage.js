/*
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

input: 'Kings and Queens'
output: IAUUEEEE
*/

const input = "kings and queens";
const vowels = ["a", "e", "i", "o", "u"];

const resultArray = [];
for (let letter = 0; letter < input.length; letter++) {
  // console.log(input[letter])
  for (let whaleword = 0; whaleword < vowels.length; whaleword++) {
    if (vowels[whaleword] === input[letter]) {
      if (vowels[whaleword] === "u") {
        resultArray.push("UU");
      } else if (vowels[whaleword] === "e") {
        resultArray.push("EE");
      } else {
        resultArray.push(vowels[whaleword].toUpperCase());
      }
    }
  }
}

console.log(resultArray.join(""));
