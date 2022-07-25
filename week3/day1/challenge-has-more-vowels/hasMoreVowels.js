"use strict";
// function hasMoreVowels(word) {
//     let vowels = /[aeiou]/gi;
//     let result = word.match(vowels);
//     let count = result.length

//     if(count > word.length / 2) {
//         console.log("true")
//     } else {
//         console.log("false")
//     }
  
// }

// hasMoreVowels("moose")




const hasMoreVowels = (word) => (word.match(/[aeiou]/gi) || []).length > word.length / 2


console.log(hasMoreVowels("mati"));