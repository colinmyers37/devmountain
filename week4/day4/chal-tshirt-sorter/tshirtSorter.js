// Write your solution below:

function sortString(sizesStr) {
    let order = {s: 1, m: 2, l: 3}
    return Array.from(sizesStr).sort((size1, size2) => order[size1] - order[size2]).join('')
}


