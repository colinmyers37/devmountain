const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}
// Append is the faster of the two because it uses the push method. push is going to add whatever number to the end of the array so it does not have to change anything else just access the end of the array which can be done easily.

function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}
//Insert is the slowest of the two because of the unshift method. unshift has to not only add the number to the beginning of the array, but it also has to move every other number in the array down 1 index each time a number is added.


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
// console.log("insert", extraLargeArray);
console.log("append", extraLargeArray);




// Insert:
// Tiny Array .82 seconds
// Small Array .85 seconds
// Medium Array .85 seconds
// Large Array .84 seconds
// Extra large array .84 seconds

// Insert:
// Tiny Array .82 seconds
// Small Array .85 seconds
// Medium Array .85 seconds
// Large Array .94 seconds
// Extra large array 1.00 seconds

// The better of the two functions for scaling is definitly insert due to it being the quicker of the two when adding more items to the array. The reasoning for this is because when using append you have to count all of the items in the array in order to shift them down one.