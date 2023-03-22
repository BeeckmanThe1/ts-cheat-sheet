/*
Implement the type version of Array.unshift
For example:
*/

type Unshift<TArr extends unknown[], TValue extends unknown = undefined> = [TValue, ...TArr]
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]