function palindrome(str: string) {
  // split the string into an array of characters
  // then reverses the array and joins it into a string
  let reversed = str.split("").reverse().join("");
  //checks to see if the reversed string is equal to input
  return reversed === str ? true : false;
}
// Run function
const isPalindrome = palindrome("radar");
console.log(isPalindrome);
