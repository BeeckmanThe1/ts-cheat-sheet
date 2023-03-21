/*
Implement the built-in Pick<T, K> generic without using it.

    Constructs a type by picking the set of properties K from T
*/

type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>  // Initial type: {title: string, completed: boolean}