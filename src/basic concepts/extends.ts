// EAZY TO UNDERSTAND:

type Test = boolean extends boolean ? true : false // true
type Test2 = true extends boolean ? true : false // true
type Test3 = false extends boolean ? true : false // true
type Test4 = boolean extends true ? true : false // false
type test5 = true | false extends true ? true : false // false
type test6 = true extends true | false ? true : false // true
type Test7 = string extends string ? true : false // true
type Test8 = 'lal' | 'lel' extends string ? true : false // true
type Test9 = string extends 'lal' | 'lel' ? true : false // false
type Test10 = number extends number ? true : false // true
type Test11 = ImportantPerson extends ImportantPerson ? true : false // true
type Test12 = Person extends ImportantPerson ? true : false // false
type Test13 = ImportantPerson extends Person ? true : false // true
type Test14 = ImportantPerson extends Partial<ImportantPerson> ? true : false // true
type Test15 = Partial<ImportantPerson> extends Required<ImportantPerson> ? true : false // false

// COUNTERINTUITIVE unions:

type SpecialUnion1 = 'a' extends 'a' | 'b' ? true : false // true
type SpecialUnion2 = 'a' | 'b' extends 'a' | 'b' | 'c' ? true : false
type SpecialUnion3 = 'a' | 'b' | 'x' extends 'a' | 'b' | 'c' ? true : false // true | false -> ('a' extends 'a' | 'b' | 'c') | ('b' extends 'a' | 'b' | 'c') | | ('x' extends 'a' | 'b' | 'c') -> true | true | false -> true | false
type SpecialUnion4 = 'a' | 'b' extends 'a' ? true : false // boolean: true | false

// COUNTERINTUITIVE falsies:

type SpecialFalsy1 = null extends undefined ? true : false // true -> NEED TO KNOW: null extends undefined & undefined extends null
type SpecialFalsy2 = null extends any ? true : false // true, ANYthing extends any (joker of TS)
type SpecialFalsy3 = undefined extends null ? true : false // true -> NEED TO KNOW: null extends undefined & undefined extends null
type SpecialFalsy4 = undefined extends any ? true : false  // true, ANYthing extends any (joker of TS)
type SpecialFalsy5 = any extends null ? true : false   // boolean -> any can stand for number | string | boolean | Record: all of which are NOT an extension of null, but any can also stand for null itself -> false | true -> boolean
type SpecialFalsy6 = any extends undefined ? true : false // boolean -> any can stand for number | string | boolean | Record: all of which are NOT an extension of null, but any can also stand for undefined itself -> false | true -> boolean

type Person = {
    firstName: string
    lastName: string
    age: number
}

type HasJob = {
    jobFunction: string
    seniority: number
}

type ImportantPerson = Person & HasJob