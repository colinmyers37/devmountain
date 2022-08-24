function findDiff(arr, arr2) {
let smallest = Number.MAX_SAFE_INTEGER;
arr.sort((a,b) => a - b)
arr2.sort((a,b) => a - b)

let a = 0, b = 0;

while ( a < arr.length && b < arr2.length) {
    if (Math.abs(arr[a] - arr2[b]) < smallest){
    smallest = Math.abs(arr[a] - arr2[b])
} else if(arr[a] < arr2[b]){
        a++;
    } else {
        b++;
    }
}
return smallest;
}
console.log(findDiff([10, 20, 14, 16, 18],
    [30, 23, 54, 33, 96]))


