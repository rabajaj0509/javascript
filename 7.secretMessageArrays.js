// Using array methods, you will transform an array of strings into a secret message!

let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript"
];

// an array method to remove the last string of the array secretMessage.
secretMessage.pop();
console.log(secretMessage.length);

// an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage.push("to", "Program");
console.log(secretMessage);

// an array method to remove the first string of the array.
secretMessage.shift();
console.log(secretMessage);

//  an array method to add the string Programming to the beginning of the array.
secretMessage.unshift("Programming");
console.log(secretMessage);

// an array method to remove the strings get, easily, the, first, time,, and replace them with the single string know.
secretMessage.splice(6, 5, "know");
console.log(secretMessage);

// use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(" "));
