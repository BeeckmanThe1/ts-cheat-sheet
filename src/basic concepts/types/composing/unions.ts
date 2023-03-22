// Unions:

type Test1 = true | true | true // true
type Test2 = true | false | never // boolean (never gets ignored in a union type & boolean = true | false)

// tuples:

type KeyValue = [string, number]
const keyValues: KeyValue[] = [['value', 1], ['value', 1], ['value', 1], ['value', 1]]

const [_first, [keyOfSecondKeyValue, valueOfSecondKeyValue], _third] = keyValues

type Test = keyof IPerson // firstName | lastName | age

type IPerson = {
    firstName: string
    lastName: string
    age: number
}

// NOTE:

type A = { a: string }
type B = { b: string }
type C = A | B

const valid1: C = {a: ""}   // eather implement A
const valid2: C = {b: ""}   // OR B
const valid3: C = {a: "", b: ""}    // or BOTH
const unValid1: C = {}  // But not none
const unValid2: C = {d: ''} // or something unassignable
const unValid3: C = {a: "", b: "", c: ''}   // or something unassignable

