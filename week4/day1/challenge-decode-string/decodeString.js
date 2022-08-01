// Write your code below this line

function decoder(str) {
    let difString = ''
    let num = Number(str.charAt(0))

    for (let i = 1; i < str.length; i++) {
        let newChar = String.fromCharCode(str.charCodeAt(i) + num).toLowerCase()
        difString += newChar
    }
    return difString
}

console.log(decoder("2fcjjm"))




// const decypher = str => {
//     let alphabet = {
//         a:1,
//         b:2,
//         c:3,
//         d:4,
//         e:5,
//         f:6,
//         g:7,
//         h:8,
//         i:9,
//         j:10,
//         k:11,
//         l:12,
//         m:13,
//         n:14,
//         o:15,
//         p:16,
//         q:17,
//         r:18,
//         s:19,
//         t:20,
//         u:21,
//         v:22,
//         w:23,
//         x:24,
//         y:25,
//         z:26
//     }
//     let alphaValues = {
//         1:"a",
//         2:"b",
//         3:"c",
//         4:"d",
//         5:"e",
//         6:"f",
//         7:"g",
//         8:"h",
//         9:"i",
//         10:"j",
//         11:"k",
//         12:"l",
//         13:"m",
//         14:"n",
//         15:"o",
//         16:"p",
//         17:"q",
//         18:"r",
//         19:"s",
//         20:"t",
//         21:"u",
//         22:"v",
//         23:"w",
//         24:"x",
//         25:"y",
//         26:"z"
//     }
//     let cypher = parseInt(str[0])
//     str = str.toLowerCase().split('')
//     str.shift()
//     for(i = 0; i < str.length; i++){
//         let newNum = alphabet[str[i]] + cypher
//         str[i] = alphaValues[String(newNum)]
//     }
//     return str.join('')
// }
// console.log(decypher("2fcjjm"))