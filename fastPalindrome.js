/**
 * Checks if word is a palindrome recursively.
 * @param {array} strArray 
 * @returns {boolean}
 */
function checkPalindrome(strArray) {
  if (strArray[0] !== strArray[strArray.length - 1]) {
    return false
  }
  strArray.shift()
  strArray.pop()
  if (strArray.length > 1) {
    checkPalindrome(strArray)
  }
  return true
}
/**
 * 
 * @param {string} str 
 * @returns {string}
 */
function fastPalindrome(str) {
  if (typeof str !== "string") throw new Error(`${str} must be a string.`)
  const strArray = str.toLowerCase().split('')
  if ( checkPalindrome(strArray) ) return `${str} is a palindrome.`
  return `${str} is not a palindrome.`
}
console.log(fastPalindrome("Hannah")) // Hannah is a palindrome.
console.log(fastPalindrome("Panama")) // Panama is not a palindrome.