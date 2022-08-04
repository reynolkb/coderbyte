// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. 
// If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// function QuestionsMarks(str) { 
//   res = false;
//   for(let i=0; i<str.length; i++){
//       // j is always 1 greater
//       for(let j=i+1; j<str.length; j++){
//           // if i is a number and the next number for the rest of the array is a number and those = 10
//           // then we return true
//           // but if 
//           if(Number(str[i]) + Number(str[j])=== 10){
//               res = true;
//               // slice at position i to j which is really j - 1
//               console.log("split is ", str.slice(i,j).split("?"));
//               // you minus 1 from length because the array includes the the i element
//               // str.slice(i,j).split("?") is equal to [ '7', '', 'sss', '' ]
//               if(str.slice(i,j).split("?").length -1 < 3){
//                   return false;
//               }
//           }
//       }
//   }
//   return res;
// }

function QuestionsMarks(str) { 
  res = false;
  for(let i=0; i<str.length; i++){
      for(let j=i+1; j<str.length; j++){
          if(Number(str[i]) + Number(str[j])=== 10){
              res = true;
              if(str.slice(i,j).split("?").length -1 < 3){
                  return false;
              }
          }
      }
  }
  return res;
}
   
// keep this function call here 
console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));

// Input: "acc?7??sss?3rr1??????5"
// Output: true