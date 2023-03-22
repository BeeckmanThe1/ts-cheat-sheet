/*Implement the built-in Omit<T, K> generic without using it.
Constructs a type by picking all properties from T and then removing K*/

type MyOmit<T extends object = {}, TOmitees extends string = ''> = {
    [key in Exclude<keyof T, TOmitees>]: T[key]
}

interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>