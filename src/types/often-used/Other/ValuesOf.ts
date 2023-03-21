type ValuesOf<T> = T[keyof T]

type Random = {
    lel: string,
    lal: number,
}

type RandomKeys = ValuesOf<Random>   // string | number