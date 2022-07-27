function decoder(code) {
    let codeArr = []
    for (let i = 0; i < code.length; i++) {
        if(Number(code[i]) >= 0 ) {
            i += Number(code[i]) + 1
            codeArr.push(code[i])

        }
    }
    return codeArr.join("")
}
console.log(decoder("0h2xce5ngbrdy"))
