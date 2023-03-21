type FunkyFunc = (...params: string[]) => void
type FunkyFunc2 = (...params: number[]) => number
type FunkyFunc3 = (firstParam: number, secondParam: string) => boolean

const funk: FunkyFunc3 = (firstParam, secondParam) => true
const similarFunk = (firstParam: number, secondParam: string) => firstParam + secondParam === 'test'
type Lel = ReturnType<typeof similarFunk>