// Primitives are strings, numbers and booleans

type BoolType = boolean
type StringType = string
type NumberType = number

// NOT POSSIBLE:
interface IBool extends boolean {}  // TS2840: An interface cannot extend a primitive type like 'boolean'; an interface can only extend named types and classes
interface IStringBool extends string {}    // TS2840: An interface cannot extend a primitive type like 'string'; an interface can only extend named types and classes
interface INumber extends number {} // TS2840: An interface cannot extend a primitive type like 'number'; an interface can only extend named types and classes

const isFlag: BoolType = true
const isString: StringType = ''
const isNumber: NumberType = 48