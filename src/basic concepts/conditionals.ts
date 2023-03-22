
// Distributive Conditional Types:
// "When conditional types act on a generic type, they become distributive when given a union type. For example, take the following:"
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types

// ** TypeA extends TypeB ? never : Type1 --> A1 | A2 | A3 extens B1 | B2 -> (A1 extends B1 | B2) | (A2 extends B1 | B2) | (A3 extends B1 | B2) -> false | false | false -> false

// * GenericUnionA extends GenericUnionB ? never : GenericUnionA
// --> ACTS DIFFERENTLY!!
// (GenericUnionA1 extends GenericUnionB ? never: GenericUnionA1) | (GenericUnionA2 extends GenericUnionB ? never: GenericUnionA2) | (GenericUnionA3 extends GenericUnionB ? never: GenericUnionA3)...
// keeps only the parts in GenericUnion that are NOT in GenericUnionB

// See exclude.ts