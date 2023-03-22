/*Implement the built-in ReturnType<T> generic without using it.
For example*/

type MyReturnType<T extends (...params: unknown[]) => any> = T extends (...params) => infer ReturnType ? ReturnType : never

const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}

type A = MyReturnType<typeof fn> // should be "1 | 2"