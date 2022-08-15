const {returnTwo, greeting, add, subtract, multiply, divide} = require("./functions")


describe("testing my functions", () => {

    test("should be the integer 2", () => {
    expect(returnTwo()).toEqual(2)
})

    test("greeting should get hello with name", () => {
        expect(greeting('James')).toEqual("Hello, James.")
        expect(greeting('Jill')).toEqual("Hello, Jill.")
    })

}) 


describe("different math functions", () =>{

    test("should get the sum of the two numbers", () => {
        expect(add(1, 2)).toEqual(3)
        expect(add(5, 9)).toEqual(14)

    })

    test("should subtract the first number from the second number", () => {
        expect(subtract(5, 2)).toEqual(3)
        expect(subtract(24, 10)).toEqual(14)

    })

    test("should get the sum of the two numbers multiplied together", () => {
        expect(multiply(2, 2)).toEqual(4)
        expect(multiply(5, 9)).toEqual(45)

    })

    test("should get the sum of the first number divided by the second number", () => {
        expect(divide(4, 2)).toEqual(2)
        expect(divide(25, 5)).toEqual(5)

    })



})