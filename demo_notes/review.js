/**
 * JavaScript Review — String, Array & Object Problems
 *
 * These problems focus on manipulating data structures using
 * built-in JS methods. Many are multi-step: input comes in as
 * one shape (string, array, object) and the answer requires
 * transforming it into another.
 *
 * you will write the functions
 *
 * Run with: node review.js
 * Or link in an HTML file: <script src="review.js"></script>
 */



console.log('\n--- Problem 1: anagrams ---');

// --- anagrams(str1, str2) ---
// Two words are anagrams if they contain the exact same letters
// in any order. Case should not matter.
// Hint: sort the letters of each word and compare.

console.log(anagrams('cats', 'tocs'));       // -> false
console.log(anagrams('tax', 'taxi'));        // -> false
console.log(anagrams('restful', 'fluster')); // -> true
console.log(anagrams('elbow', 'below'));     // -> true



console.log('\n--- Problem 2: mostFrequentChar ---');

// --- mostFrequentChar(str) ---
// Return the character that appears the most times in the string.
// If there's a tie, return whichever appears first.
// Hint: build a frequency object, then find the key with the highest value.

console.log(mostFrequentChar('bookeeper'));   // -> 'e'
console.log(mostFrequentChar('mississippi')); // -> 'i'
console.log(mostFrequentChar('potato'));      // -> 'o'



console.log('\n--- Problem 3: longestWord ---');

// --- longestWord(sentence) ---
// Given a sentence string, return the longest word.
// If there's a tie, return the first one.
// Hint: 'split' the sentence into words first.

console.log(longestWord('hello world'));        // -> 'hello'
console.log(longestWord('programming is fun')); // -> 'programming'
console.log(longestWord('go do it'));           // -> 'go'



console.log('\n--- Problem 4: isPalindrome ---');

// --- isPalindrome(str) ---
// A palindrome reads the same forwards and backwards.
// Ignore spaces, punctuation, and capitalization.
// Hint: clean the string first (letters and numbers only), then compare
//       it to its reverse. String has no built-in reverse — arrays do.

console.log(isPalindrome('racecar'));                        // -> true
console.log(isPalindrome('A man a plan a canal Panama'));    // -> true
console.log(isPalindrome('hello'));                          // -> false
console.log(isPalindrome('Was it a car or a cat I saw'));    // -> true



console.log('\n--- Problem 5: capitalize ---');

// --- capitalize(str) ---
// Capitalize the first letter of every word in a string.
// The rest of each word should be lowercase.
// Hint: split into words, transform each one, join back.

console.log(capitalize('hello world'));         // -> 'Hello World'
console.log(capitalize('the quick brown fox')); // -> 'The Quick Brown Fox'
console.log(capitalize('javaScript IS fun'));   // -> 'Javascript Is Fun'



console.log('\n--- Problem 6: reverseWords ---');

// --- reverseWords(sentence) ---
// Reverse the ORDER of words in a sentence (not the letters).
// Hint: split, reverse the array, join methods

console.log(reverseWords('hello world'));         // -> 'world hello'
console.log(reverseWords('the quick brown fox')); // -> 'fox brown quick the'
console.log(reverseWords('one'));                 // -> 'one'



console.log('\n--- Problem 7: countVowels ---');

// --- countVowels(str) ---
// Return how many vowels (a, e, i, o, u) are in the string.
// Case should not matter.
// Hint: loop through characters and check if each is a vowel.

console.log(countVowels('hello'));      // -> 2
console.log(countVowels('why'));        // -> 0
console.log(countVowels('education')); // -> 5
console.log(countVowels('JavaScript')); // -> 3



console.log('\n--- Problem 8: removeDuplicates ---');

// --- removeDuplicates(arr) ---
// Return a new array with duplicate values removed.
// Preserve the original order (keep the FIRST occurrence of each value).
// Hint: a Set only holds unique values and respects insertion order.

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));          // -> [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b']));       // -> ['a', 'b', 'c']
console.log(removeDuplicates([true, false, true, true, false])); // -> [true, false]



console.log('\n--- Problem 9: chunk ---');

// --- chunk(arr, size) ---
// Split an array into groups of `size`.
// The last group may be smaller if the array doesn't divide evenly.
// Hint: loop through the array in steps of `size`, slice out each group.

console.log(chunk([1, 2, 3, 4, 5, 6], 2)); // -> [[1, 2], [3, 4], [5, 6]]
console.log(chunk([1, 2, 3, 4, 5], 2));    // -> [[1, 2], [3, 4], [5]]
console.log(chunk(['a', 'b', 'c'], 1));    // -> [['a'], ['b'], ['c']]



console.log('\n--- Problem 10: wordCount ---');

// --- wordCount(sentence) ---
// Return an object where each key is a word and the value is how
// many times that word appears in the sentence. Case insensitive.
// This is a string → object transformation.
// Hint: split into words, then build a frequency object with reduce (or a loop).

console.log(wordCount('the cat sat on the mat'));
// -> { the: 2, cat: 1, sat: 1, on: 1, mat: 1 }

console.log(wordCount('to be or not to be'));
// -> { to: 2, be: 2, or: 1, not: 1 }



console.log('\n--- Problem 11: intersection ---');

// --- intersection(arr1, arr2) ---
// Return a new array containing only the values that appear in BOTH arrays.
// No duplicates in the result.
// Hint: filter one array, keeping only items that are included in the other.

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));      // -> [3, 4]
console.log(intersection(['a', 'b', 'c'], ['b', 'c', 'd'])); // -> ['b', 'c']
console.log(intersection([1, 2, 3], [4, 5, 6]));             // -> []



console.log('\n--- Problem 12: groupBy ---');

// --- groupBy(arr, key) ---
// Given an array of objects and a key, return an object that groups the
// items by the value at that key. This is an array → object transformation.
// Hint: use reduce — the accumulator starts as {}, and each item gets
//       pushed into the array at the right key.

const people = [
  { name: 'Alice', city: 'NYC' },
  { name: 'Bob',   city: 'LA'  },
  { name: 'Carol', city: 'NYC' },
  { name: 'Dan',   city: 'LA'  },
  { name: 'Eve',   city: 'NYC' },
];

console.log(groupBy(people, 'city'));
// -> {
//      NYC: [{ name: 'Alice', ... }, { name: 'Carol', ... }, { name: 'Eve', ... }],
//      LA:  [{ name: 'Bob', ... }, { name: 'Dan', ... }]
//    }



console.log('\n--- Problem 13: rotate ---');

// --- rotate(arr, n) ---
// Rotate the array to the right by n positions.
// Elements shifted off the end wrap around to the front.
// Hint: use slice to cut the array into two pieces, then swap them.

console.log(rotate([1, 2, 3, 4, 5], 2)); // -> [4, 5, 1, 2, 3]
console.log(rotate([1, 2, 3, 4, 5], 1)); // -> [5, 1, 2, 3, 4]
console.log(rotate(['a', 'b', 'c'], 4)); // -> ['c', 'a', 'b']  (wraps around)


