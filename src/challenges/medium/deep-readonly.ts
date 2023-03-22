/*
Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.
You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.
*/

type DeepReadonly<T = object> = {
    readonly [k in keyof T]: T[k] extends object ? DeepReadonly<T[k]> : T[k]
}

type X = {
    x: {
        a: 1
        b: 'hi'
    }
    y: 'hey'
}

type Expected = {
    readonly x: {
        readonly a: 1
        readonly b: 'hi'
    }
    readonly y: 'hey'
}

const test: DeepReadonly<X> = {x: {b:'hi', a: 1}, y: "hey"}
// NOTE: apparently is only superficial implementation required:
const test2: DeepReadonly<X> = {x: undefined, y: "hey"} // IS FINE