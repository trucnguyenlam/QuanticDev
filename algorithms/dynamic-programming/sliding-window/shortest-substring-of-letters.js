const assert = require('assert')

/**
 * Given a string and n characters, find the shortest substring that contains all given characters.
 *
 * @param string - Any string.
 * @param characters - A string of characters that the substring should contain.
 * @returns {string} - The shortest substring containing all the desired characters.
 */
function getShortestSubstring (string, characters) {
  let substringStartIndex = 0
  let smallestSubstringStartIndex = 0; let smallestSubstringEndIndex = 0
  const neededChars = characters.split('').reduce((freq, char) => { freq[char] ? freq[char]++ : freq[char] = 1; return freq }, {})
  let missingChars = characters.length

  for (let substringEndIndex = 0; substringEndIndex < string.length; substringEndIndex++) {
    const char = string[substringEndIndex]

    if (neededChars[char]) missingChars--
    neededChars[char]--

    if (!missingChars) {
      while (substringStartIndex < substringEndIndex && neededChars[string[substringStartIndex]] < 0) {
        neededChars[string[substringStartIndex]]++
        substringStartIndex++
      }

      if (!smallestSubstringEndIndex || (substringEndIndex - substringEndIndex) < (smallestSubstringEndIndex - smallestSubstringStartIndex)) {
        smallestSubstringStartIndex = substringStartIndex
        smallestSubstringEndIndex = substringEndIndex
      }
    }
  }

  return string.slice(smallestSubstringStartIndex, smallestSubstringEndIndex + 1)
}

/**
 * Tests
 */

// test case #1
const exampleInput1 = 'a93kdabc991cba35fg'
const desiredCharacters1 = 'abcabc'
const solution1 = 'abc991cba'

const calculatedSolution1 = getShortestSubstring(exampleInput1, desiredCharacters1)

console.log(`Example Input #1: ${exampleInput1}, Desired Characters: ${desiredCharacters1}, Solution: ${calculatedSolution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)

// test case #2
const exampleInput2 = 'asb2.9d/d"!304#b$%^%!ksd,2294iubasdmc'
const desiredCharacters2 = 'b$#2'
const solution2 = '#b$%^%!ksd,2'

const calculatedSolution2 = getShortestSubstring(exampleInput2, desiredCharacters2)

console.log(`Example Input #2: ${exampleInput2}, Desired Characters: ${desiredCharacters2}, Solution: ${calculatedSolution2}`)
assert.deepStrictEqual(calculatedSolution2, solution2)