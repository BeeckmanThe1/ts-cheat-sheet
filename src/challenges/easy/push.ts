/*
Implement the generic version of Array.push
For example:
*/

type Push<TArr extends unknown[] = [], TValue extends unknown = undefined> = [...TArr, TValue]
type Result = Push<[1, 2], '3'> // [1, 2, '3']