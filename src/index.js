module.exports = function check(str, bracketsConfig) {
  // your solution
  const stack = [];
  const errors = [];
  const opposite = bracketsConfig.reduce((a, b) => {
    a[b[0]] = b[1];
    return a;
  }, {});
  const openBrackets = Object.keys(opposite);
  const closeBrackets = Object.values(opposite);
  console.log(str);

  [...str].forEach(char => {
    if (openBrackets.includes(char) && closeBrackets.includes(char)) {
      if (char === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      if (openBrackets.includes(char)) {
        stack.push(char)
      } else {
        if (closeBrackets.includes(char)) {
          char === opposite[stack[stack.length - 1]] ? stack.pop() : errors.push(char);
        } else {
          errors.push(char);
        }
      }
    }
  })
  return !stack.length && !errors.length;
}
