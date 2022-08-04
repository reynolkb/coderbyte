// const unique = (array) => {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const ele = array[i];
//     // time is n^2 since includes scans each element within array
//     if (!newArray.includes(ele)) {
//       newArray.push(ele);
//     }
//   }

//   return newArray;
// }

// console.log(unique(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']));

// // Time: O(n^2)
// // Space: O(n) since there is one array

const unique = (array) => {
  const onlyUniques = new Set(); // automatically removes duplicates

  for (let i = 0; i < array.length; i++) {
    const ele = array[i];
    onlyUniques.add(ele);
  }

  return Array.from(onlyUniques);
}

console.log(unique(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']));

// Time: O(n)
// Space: O(n) since there is one array