// Have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. 
// Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. 
// Only "(" and ")" will be used as brackets. If str contains no brackets return 1.

function BracketMatcher(str) { 
  let stack = [];
  let negatives = 0;

  for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
          stack.push('(');
      } else if (str[i] === ')') {
          // if you have two )) in a row then it will be undefined and therefore you want to increase the negative count
          if (stack.pop() === undefined) {
              negatives++;
          }
      }
  }
  
  // if there an equal number of "(" and ")" and there are no negatives then return 1, else return 0
  return (stack.length === 0 && negatives === 0) ? 1 : 0;
}
   
// keep this function call here 
console.log(BracketMatcher("the color re(d))()(()"));