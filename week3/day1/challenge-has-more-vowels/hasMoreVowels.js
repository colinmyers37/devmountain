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




const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length > str.length / 2


console.log(countVowels("moon"));