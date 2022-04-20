/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
  const leftBracketArray = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      leftBracketArray.push(s[i]);
    } else if (
      s[i] === ")" &&
      leftBracketArray.length !== 0 &&
      leftBracketArray[leftBracketArray.length - 1] === "("
    ) {
      leftBracketArray.pop();
    } else if (
      s[i] === "}" &&
      leftBracketArray.length !== 0 &&
      leftBracketArray[leftBracketArray.length - 1] === "{"
    ) {
      leftBracketArray.pop();
    } else if (
      s[i] === "]" &&
      leftBracketArray.length !== 0 &&
      leftBracketArray[leftBracketArray.length - 1] === "["
    ) {
      leftBracketArray.pop();
    } else {
      return false;
    }
  }
  return leftBracketArray.length === 0;
};

module.exports = isValid;
