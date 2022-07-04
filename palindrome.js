/**
 * Checks if a word is a palindrome
 * @param {string} str - a word to check if is a palindrome
 * @returns {string}
 */
function palindrome(str) {
  if (typeof str !== "string") throw new Error(`${str} must be a string.`)
  const reverseStr = str.split('').reverse().join('').toLowerCase()
  if (str.toLowerCase() === reverseStr) return `${str} is a palindrome.`
  return `${str} is not a palindrome.`
}
console.log(palindrome("Hannah")) // Hannah is a palindrome.
console.log(palindrome("Panama")) // Panama is not a palindrome.