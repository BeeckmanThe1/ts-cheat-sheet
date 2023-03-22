/*
Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.
*/

type MyReadonly2<T extends object = {}, TKeys extends keyof T = undefined> = TKeys extends undefined ? Required<T> : T & {
    readonly [key in TKeys]: T[key]
}

// This is probably a better approach:
type MyReadonly22<T extends object = {}, TKeys extends keyof T = undefined> = TKeys extends undefined ? Required<T> : {
    readonly [key in TKeys]: T[key]
} & {
    [key2 in keyof T as Exclude<key2, TKeys>]: T[key2]
    // or more readable:
    // [key2 in Exclude<keyof T, TKeys>]: T[key2]
}

interface Todo {
    title: string
    description: string
    completed: boolean
}

type Test = MyReadonly2<Todo, 'title' | 'description'>  // Initial type: (Todo & {readonly title: string}) | (Todo & {readonly description: string}) THIS WORKS
const todo: Test  = {
    title: "Hey",
    description: "foobar",
    completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK