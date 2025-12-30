let age: number = 25;
console.log("Age:",  typeof age, age)

let pi: number = 3.14;
console.log("Pi:", typeof pi, pi)

let firstName: string = "John"
console.log("First Name:", typeof firstName, firstName)

let isStudent: boolean = true
console.log("Is Student:", typeof isStudent, isStudent)

let nothing: null = null
console.log("Nothing:", typeof nothing, nothing)

let notDefined: undefined = undefined
console.log("Not Defined:", typeof notDefined, notDefined)

// let bigNumber: bigint = 9007199254741991n
// console.log("Big Number:", typeof bigNumber, bigNumber)

let symbolValue: symbol = Symbol("unique")
console.log("Symbol Value:", typeof symbolValue, symbolValue)

let whatever: any = "Could be anything"
console.log("Whatever:", typeof whatever, whatever)
whatever = 42
console.log("Whatever:", typeof whatever, whatever)
whatever = false
console.log("Whatever:", typeof whatever, whatever)

let unknownValue: unknown = "Unknown type"
console.log("Unknown Value:", typeof unknownValue, unknownValue)
unknownValue = 100
console.log("Unknown Value:", typeof unknownValue, unknownValue)
unknownValue = true
console.log("Unknown Value:", typeof unknownValue, unknownValue)

let neverValue: never;
// neverValue = "This will cause an error"; // Uncommenting this line will cause a TypeScript error
console.log("Never Value cannot be assigned any value.");

let voidValue: void = undefined
console.log("Void Value:", typeof voidValue, voidValue)
