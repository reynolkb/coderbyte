function FizzBuzz(num) { 
  let arr = [];

  for (var i = 1; i < num + 1; i++) {
    if(i % 15 === 0) {
      arr.push("FizzBuzz");
    }
    else if (i % 5 === 0) {
      arr.push("Buzz");
    }
    else if (i % 3 === 0) {
      arr.push("Fizz");
    }
    else {
      arr.push(i);
    }
  }

  return arr.join(' ');
}

// keep this function call here 
console.log(FizzBuzz(3));