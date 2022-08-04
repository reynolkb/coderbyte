// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. 
// For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.

function FirstFactorial(num) { 
  if (num === 1) {
    return 1;
  } else {
    return (num * FirstFactorial(num - 1));
  }
}
   
// keep this function call here 
console.log(FirstFactorial(4));

// FirstFactorial(4)
//  4 * FirstFactorial(3)
//    3 * FirstFactorial(2)
//      2 * FirstFactorial(1) or 1

// now you process back up
// FirstFactorial(1) = 1
// FirstFactorial(2) = 2 * 1 = 2
// FirstFactorial(3) = 3 * 2 * 1 = 6
// FirstFactorial(4) = 4 * 3 * 2 * 1 = 24