// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
let output = [];
function balanceChecker(str) {
    let count = 1;
    for(let i = 0; i < str.length; i++) {
        if (str[i] === "("  ) {
            output.push(str[i]);
            count++;
        } else if (str[i] === ")") {
            if (output.pop() !== "(") {
                count++
            }
        }
        console.log(count);
    }
    return output.length;
}

balanceChecker(sample1)