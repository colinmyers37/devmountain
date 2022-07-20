



const isUnique = (str) => {
    let hasUniqueSet = new Set([]);
    for (i = 0; i < str.length; i++) {
        hasUniqueSet.add(str[i])
    }
    return hasUniqueSet.size === str.length
}

console.log(isUnique('hello'))


// instead of looping i could just make the set let hasUniqueSet = new set(str)