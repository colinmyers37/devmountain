


function luckyNumbers(n) {
    let randomArr = [];
    while (randomArr.length < n) {
        let r = Math.floor(Math.random() * 10) + 1;
        if (randomArr.indexOf(r) === -1) randomArr.push(r);
    } return console.log(randomArr)
}
luckyNumbers(2)






// const luckyNumbers = n => {
//     let uniqueSet = new Set([])
//     while(uniqueSet.size < n){
//       uniqueSet.add(Math.floor(Math.random() * 10) + 1)
//     }
//     return [...uniqueSet]
//   }
  
//   console.log(luckyNumbers(9)