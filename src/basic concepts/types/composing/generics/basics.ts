type WrappedInData<T> = {
    data: T[]
}

interface IWrappedInData<T> {
    data: T[]
}

const input = 'lalalal'
const dataWrap: WrappedInData<typeof input> = {
    data: [input]
}

// defaults
type WrappedInData2<T = string> = {
    data: T[]
}

interface IWrappedInData2<T = string> {
    data: T[]
}

const input2 = 'lalalal2'
const dataWrap2: WrappedInData2 = {
    data: [input2]
}

// typing/restricting Generic type
type WrappedInData3<T extends { value: string }> = {
    data: T[]
}

interface IWrappedInData3<T extends { string: string }> {
    data: T[]
}

const input3 = 'lalalal2'
const dataWrap3: WrappedInData3<{value: typeof input3}> = {
    data: [{value: input3}]
}