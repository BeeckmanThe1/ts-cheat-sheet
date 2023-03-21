// STRINGS

const lel: string = 12      // TS2322: Type 'number' is not assignable to type 'string'.
const lel2: string = 'string' // Type inference: not needed to explicitly type this as a string

    // string literal

type Welcome = 'Hey' | 'yo' | 'Whatup'
type FirstName = 'James' | 'Tamara' | 'Emma'
type LastName = 'De Rulo' | 'Christus' | 'The Rock'
type WelcomeMessage = `${Welcome} ${FirstName} ${LastName}`

// BOOLS

const value: boolean = ''
const value2: true | false = 12

// number

const value3: number = ''