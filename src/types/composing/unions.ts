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

