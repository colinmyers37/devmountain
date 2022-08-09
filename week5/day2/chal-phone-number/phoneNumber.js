let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// function createPhoneNumber(arr) {
// return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-$${arr.slice(6).join('')}`
// }

function createPhoneNumber(arr) {
    let mask = '(xxx) xxx-xxxx';

    arr.forEach(item => {
        mask=mask.replace('x', item);
    });

    return mask
}



console.log(createPhoneNumber(testArr))