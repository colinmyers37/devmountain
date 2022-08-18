function sortByProduct(arr) {
    let obj = arr.map((num, i) => {
        return {orig: num, prod: (num * (i + 1))}
    })

    return obj.sort((a, b) =>  a.prod - b.prod).map(num => num.orig)

}