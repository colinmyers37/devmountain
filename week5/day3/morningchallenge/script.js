// write a function that takes a number. take this number and give an appropriate amount of change back in an object
// example of an input/output
// generate_change(100) ---> {Q:4,D:0,N:0,P:0}
// generate_change(26) ---> {Q:1,D:0,N:0,P:1}

function getChange(number) {
    let i = number;
    const change = {Q:0,D:0,N:0,P:0};
    while (i > 0) {
        if (i - 25 >= 0) {
            change.Q += 1;
            i -= 25;
        } else if(i - 10 >= 0) {
            change.D += 1;
            i -= 10;
        } else if(i - 5 >= 0) {
            change.N += 1;
            i -= 5;
        } else if(i - 1 >= 0) {
            change.P += 1;
            i -= 1;
        }
    }
    return change
}
console.log(getChange(24))