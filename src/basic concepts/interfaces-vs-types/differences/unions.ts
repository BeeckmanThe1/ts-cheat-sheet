// Unlike an interface, the type alias can also be used for other types such as primitives, unions, and tuples.

type Test = {
    lel: string
}
type Test2 = {
    lal: string
}
interface ITest {
    lel: string
}

interface ITest2 {
    lal: string
}

type UnionType = Test | Test2
type UnionType2 = ITest | ITest2    // this is possible
interface IUnion extends ITest | ITest2 // NOT POSSIBLE

const union: UnionType = {
    lel: 'test',
    lal: 'lol',
    bleb: ''
}
const union2: UnionType2 = {
    lel: 'test',
    lal: 'lol',
    bleb: ''
}