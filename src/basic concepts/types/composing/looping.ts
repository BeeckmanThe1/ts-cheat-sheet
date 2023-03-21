type Keys = 'key1' | 'key2' | 'key3'
type RecordWithKnownKeys = { [k in Keys]: unknown } // Initial type: {key1: unknown, key2: unknown, key3: unknown}

// Very strong in combination of keyof

type PickMe<T, TPickedKeys extends keyof T = keyof T> = {
    [k in TPickedKeys]: T[k]
}

type Person = {
    firstName: string
    lastName: string
    age: number
}
type Person2 = PickMe<Person, 'firstName' | 'lastName'> // Initial type: {firstName: string, lastName: string}