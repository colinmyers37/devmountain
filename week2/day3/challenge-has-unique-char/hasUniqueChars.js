



function isUnique(str) {
    let hasUniqueSet = new Set([]);
    for (i = 0; i < str.length; i++) {
        hasUniqueSet.add(str[i])
    }
    return hasUniqueSet.size === str.length
}

console.log(isUnique('hello'))
