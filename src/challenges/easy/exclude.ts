/*
    Implement the built-in Exclude<T, U>
    Exclude from T those types that are assignable to U
*/

    // THIS SHOULD NOT BE IN THE EASY SECTION
    // IT's NOT eazy and NOT straight forward

type MyExclude<T extends string = '', TExcludee extends string = ''> = T extends TExcludee ? never : T  // *
type MyExclude2<T extends string = '', TExcludee extends string = ''> = T extends TExcludee ? T : never  // *
type T = 'a' | 'b' | 'c';
type TExcludee = 'a';

type Result = MyExclude<T, TExcludee>      // 'b' | 'c'
type Result2 = T extends TExcludee ? never : T // WHY IS THIS NOT THE SAME AS MyExclude<T, TExcludees> ???? **
type Result3 = true | false | false extends true ? never : 'a' | 'b' | 'c'   //  **
type Result4 = boolean extends true ? never : 'a' | 'b' | 'c'                // **

type Result5 = Exclude<T, TExcludee> // 'b' | 'c'

// Distributive Conditional Types:
// "When conditional types act on a generic type, they become distributive when given a union type. For example, take the following:"
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types

// ** TypeA extends TypeB ? never : Type1 --> A1 | A2 | A3 extens B1 | B2 -> (A1 extends B1 | B2) | (A2 extends B1 | B2) | (A3 extends B1 | B2) -> false | false | false -> false

// * GenericUnionA extends GenericUnionB ? never : GenericUnionA
// --> ACTS DIFFERENTLY!!
// (GenericUnionA1 extends GenericUnionB ? never: GenericUnionA1) | (GenericUnionA2 extends GenericUnionB ? never: GenericUnionA2) | (GenericUnionA3 extends GenericUnionB ? never: GenericUnionA3)...
// keeps only the parts in GenericUnion that are NOT in GenericUnionB