/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
function firstChar(str) {
  if (str === "") {
    return "";
  }
  return str[0]; // why doesn't str[0] work for ""
}

/**
 * Returns the length of a string
 * @param {string} - str
 * @returns {number} - length of string
 */

function stringLength(str) {
  return str.length;
}

/**
 * Returns the last character of any string
 * @param {string} - str
 * @returns {string} - last letter
 */

function lastLetter(str) {
  // why doesnt str[str.length -1] on "" str
  if (str === "") {
    return "";
  }
  return str[str.length - 1];
}

/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

function capitalizeLastLetter(str) {
  if (str === "") {
    return "";
  }
  return str.slice(0, str.length - 1) + str[str.length - 1].toUpperCase(); // slice(0, -1) returns last character of the string
}

/**
 *  Create a drEvil function that will take a single number variable, and log the '<variableAmount> dollars',
and should add '(pinky)' at the end of the amount if it's 1 million or more. For example:

```js
let amount = 10
// => 10 dollars
let amount = 1000000
// =>  1000000 dollars (pinky)
```
* @param {number}
* @returns {string}
 */
function drEvil(num) {
  if (num < 1000000) {
    return `${num} dollars`;
  }
  return `${num} dollars (pinky)`;
}

/**
 * 
 * Create a `verbing` function.
 * It should take a single string variable. 
 * If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', 
 * in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. 
 * @param {string}
 * @returns {string}
For example:

```js
verbing('box')
// => 'boxing'
verbing('train')
// => 'training'
verbing('swimming')
// =>  'swimmingly'
verbing('go')
// =>  'go'
```
 
 */

function verbing(str) {
  // come back to
  if (str.slice(-3) === "ing") {
    return str + "ly";
  } else if (str.length >= 3) {
    return str + "ing";
  } else {
    return str;
  }
}

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

function removeLastWord(string) {
  let array = string.split(" ");
  array.pop();
  return array.join(" ");
}

/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 */

function everyOtherLetter(str) {
  let evenIdxChar = "";
  for (let i = 0; i <= str.length; i += 2) {
    evenIdxChar += str[i];
  }
  return evenIdxChar;
}

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
function disemvowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase())) {
      // elements not included in string set all passed in letters toLowerCase
      newStr += str[i];
    }
  }
  return newStr;
}

// console.log(disemvowel("this is a song that never ends it goes on and on my friends"))

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 */

function disemvowelLongWords(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let strArr = str.split(" ");
  // console.log(strArr);
  let newStr = "";
  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    // console.log(word)
    if (word.length >= 5) {
      str.split(vowels[i]);
      newStr += strArr[i] + " ";
      // console.log(newStr)
      // newStr + vowels.includes(strArr[i].toLowerCase())
      // console.log(strArr[i])
    } else {
      newStr += strArr[i] + " ";
      // console.log(newStr)
    }
  }
  return newStr;
}

// disemvowelLongWords("this is a song that never ends it goes on and on my friends")

/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */

function middleCharacter(str) {
  
if (str.length % 2 !== 0) {
   str = str[(str.length - 1) / 2];
  } else {
    str = str[str.length / 2 - 1] + str[str.length / 2]; 
  }
  return str
}

/**
 * Takes in a string and reverses it.
 * Do not use split
 * @param {string}
 * @returns {string}
 */

function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr
}

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string}
 * @returns {string}
 */

function reverseSentenceWords(str) {
  let splitStr = str.split(" ");
  let word = "";
  let newStr = "";
  for (let i = splitStr.length - 1; i >= 0; i--) {
    word = splitStr[i]
    console.log(`${i} ${splitStr[i]} ${word}`)
    // console.log(`${i} ${splitStr[i]}`)
    for (let j = splitStr[i].length - 1; j >= 0; j--) {
      // console.log(`${j} ${splitStr[i].length}`)
      // newStr += word[j]
    }
  }
  return newStr
}

console.log(reverseSentenceWords("stac era eht tseb"))
console.log(reverseSentenceWords("olleH dlrow"))

module.exports = {
  firstChar,
  stringLength,
  lastLetter,
  capitalizeLastLetter,
  drEvil,
  verbing,
  removeLastWord,
  everyOtherLetter,
  disemvowel,
  disemvowelLongWords,
  middleCharacter,
  reverseString,
  reverseSentenceWords,
};
