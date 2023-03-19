

function countOccurrences(str) {
  const words = str.split(' ');
  const counts = new Map();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    counts.has(word) ? counts.set(word, counts.get(word) + 1) : counts.set(word, 1);
  }
  return counts;
}

const text = "Any fool can write code that a computer can understand. Good programmers write code that humans can understand";
const counts = countOccurrences(text);
console.log(counts);


/*Output: Map {
  'Any' => 1,
  'fool' => 1,
  'can' => 3,
  'write' => 2,
  'code' => 2,
  'that' => 2,
  'a' => 1,
  'computer' => 1,
  'understand.' => 1,
  'Good' => 1,
  'programmers' => 1,
  'humans' => 1,
  'understand' => 1
}
*/
