
type Test = {
    lel: string
}
type Test2 = {
    lel: string
}
interface ITest {
    lel: string
}
interface ITest2 {
    lel: string
}

type TupleType = [Test, Test2]
interface ITuple extends [ITest, ITest2]    // NOT POSSIBLE