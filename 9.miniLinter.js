/* Calculate the following results for the story:
The word count
The sentence count
The number of times each overused word appears
*/

let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

let storyWords = story.split(" ");
// console.log(storyWords.length)

// remove the unnecessary words from the story
const betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word);
});
// console.log(betterWords)

// remove the overused words from the story.
const count = new Array(overusedWords.length).fill(0);
for (let overuse = 0; overuse < overusedWords.length; overuse++) {
  for (let word = 0; word < storyWords.length; word++) {
    if (storyWords[word] === overusedWords[overuse]) {
      count[overuse] += 1;
    }
  }
}
// console.log(count)

// count how many sentences are in the paragraph
let sentences = 0;
storyWords.forEach(word => {
  if (word[word.length - 1] === "." || word[word.length - 1] === "!") {
    sentences += 1;
  }
});
// console.log(sentences)

// Log these items to the console:
// The word count
// The sentence count
// The number of times each overused word appears
console.log(`The word count: ${storyWords.length}`);
console.log(`The sentence count: ${sentences}`);
for (let word = 0; word < overusedWords.length; word++) {
  console.log(
    `The number of times "${overusedWords[word]}" word appears is: ${count[word]}`
  );
}
