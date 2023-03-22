/*
Implement the built-in Parameters generic without using it.
For example:
*/

type MyParameters<T extends (...params: unknown[]) => any> = T extends (...params: infer Params) => any ? Params : never

const foo = (arg1: string, arg2: number): void => {}
type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]