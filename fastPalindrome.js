function checkFirstLastChar(strArray) {
  if (strArray[0] !== strArray[strArray.length - 1]) {
    return `is not a palindrome.`
  }
  strArray.shift()
  strArray.pop()
  if (strArray.length > 1) {
    checkFirstLastChar(strArray)
  }
  return 'is a palindrome.'
}
function fastPalindrome(str) {
  if (typeof str !== "string") throw new Error(`${str} must be a string.`)
  const strArray = str.toLowerCase().split('')
  return str + ' ' + checkFirstLastChar(strArray)
}
console.log(fastPalindrome("Hannah")) // Hannah is a palindrome.
console.log(fastPalindrome("Panama")) // Panama is not a palindrome.