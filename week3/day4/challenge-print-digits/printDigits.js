function printDigits(num) {
    let revNum = 0;
while(num != 0){
    lastDigit = num % 10;
    revNum = revNum * 10 + lastDigit;
    num = Math.floor(num/10);
}
return revNum
}

console.log(printDigits(456799))