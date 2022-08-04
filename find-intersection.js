// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: 
// the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). 
// Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

function FindIntersection(strArr) { 
  // code goes here  
  let newArr = [];
  let elem1 = strArr[0].split(', ');
  let elem2 = strArr[1].split(', ');

  // code goes here  
  for(let i = 0; i < elem1.length; i++ ) {
    if (elem2.includes(elem1[i])) {
      newArr.push(elem1[i]);
    }
  }
  if (newArr.length === 0) {
    return false;
  } 
  else {
    return newArr.toString();
  }
}
   
// keep this function call here 
console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));

// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10