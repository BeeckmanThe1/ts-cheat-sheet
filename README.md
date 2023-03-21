Typescript documentation based on challenges:
https://github.com/type-challenges/type-challenges

type UnionExclude<T, U> = T extends U ? never : T
type NewType = UnionExclude<'a' | 'b' | 'c' | 'd', 'a' | 'd'> // 'b' | 'c'

// BUUUUUUUUUUUUUUUUUT:

type Test19 = 'a' | 'b' | 'c' | 'd' extends 'a' | 'd' ? never : 'a' | 'b' | 'c' | 'd' // 'a' | 'b' | 'c' | 'd'
