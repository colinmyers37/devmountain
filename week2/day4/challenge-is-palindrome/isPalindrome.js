//const isPalindrome = str => str === str.split('').reverse().join('')


function isPal(str) {
    let newStr = ('');
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
   if(newStr === str) {
    console.log("true")
   } else {
    console.log("false")
   }
}
isPal("racecar")




