// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charCount = {}
  let arr = str.split("")

  arr.forEach((char) => {
    charCount[char] = charCount[char]++ || 1
  })

  let finalChar = null
  let result = ""

  for (let c in charCount) {
    if (charCount[c] > finalChar || finalChar === null) {
      finalChar = charCount[c]
      result = c
    }
  }
  return result
}

module.exports = maxChar;
