module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let bracketsPairs = {};
  bracketsConfig.forEach((pair) => {
    const closeBracket = pair[1];
    const openBracket = pair[0];
    const sameBracket = `same${closeBracket}`;
    openBrackets.push(openBracket);
    (closeBracket != openBracket) ? bracketsPairs[closeBracket] = openBracket : bracketsPairs[closeBracket] = sameBracket;
  });
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];
    stack.push(bracket);
    let top = stack[stack.length - 1];
    let preTop = stack[stack.length - 2]
    let sameTop = 'same' + top
    if (bracketsPairs[bracket] === sameTop) {
      if (top === preTop) {
        stack.pop();
        stack.pop();
      }
    }
    if (stack.length > 1) {
    if (bracketsPairs[bracket] === preTop) {
      stack.pop();
      stack.pop();
    }
    }
  }
     return stack.length === 0;
}