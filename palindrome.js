function palindrome(str) {
  if (typeof str !== "string") throw new Error(`${str} must be a string.`)
  const reverseStr = str.split('').reverse().join('')
  if (str === reverseStr) { return `${str} is a palindrome.` }
  return `${str} is not a palindrome.`
}
console.log(palindrome("ana")) // Ana is a palindrome.
console.log(palindrome("panama")) // Panama is not a palindrome.