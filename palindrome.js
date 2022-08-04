function Palindrome(str) { 
  var str = str.split(" ").join("").toLowerCase();

  var rev = str.split('').reverse().join('');

  return str === rev;
}
   
// keep this function call here 
console.log(Palindrome("never odd or even"));