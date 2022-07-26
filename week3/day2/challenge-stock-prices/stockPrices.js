function best(arr) {
    let maxProfit = 0;
    let lowestPrice = arr[0];
    for(let i = 0; i < arr.length; i++) {
        let price = arr[i];
        if(price < lowestPrice) lowestPrice = price;
        let profit = price - lowestPrice;
        maxProfit = Math.max(profit, maxProfit);
    }
    return maxProfit
}



console.log(best([100, 0]))