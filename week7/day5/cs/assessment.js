// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addZero(arr) {
    let num = 0;
    let obj = {}
    let diff 


    for( let i = 0; i < arr.length; i++ ) {
        diff = num - arr[i];
    if (obj[diff]) {
        return true;
    } else {
        obj[arr[i]] = true
    }

    }
    return false
}

//The runtime on this function will be o(n) because of the for loop inside of the function that will increase the runtime depending on how many numbers are in the array.


// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.


function isUnique(string) {
let uniq = new Set(string)
 uniq = Array.from(uniq).join('')

 if(uniq === string) {
    return true
 } else {
    return false
 }

}

// The runtime on this function will be o(n) due to it actually being a function that is iterating over the set to make it into an array. 



// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”


function isPangram(string){
    const letters = string.toLowerCase().match(/[a-z]/g);
    const alphabet = [...new Set(letters)]
    return alphabet.length === 26;
}
// This function is also going to be o(n) due to having multiple operations that the time would increase if the string is longer.



// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.


function find_longest_word(arr) {
    let longest = '';
     let longestNum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestNum) {
            longestNum = arr[i].length;
            longest = arr[i]
        }
    }
    return longest
}

// This runtime is o(n) due to having a for loop. This means it can increase in run time due to the longer the array actually is.