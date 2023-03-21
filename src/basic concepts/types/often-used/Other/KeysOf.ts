type KeysOf<T> = keyof T

type Random = {
    lel: string,
    lal: number,
}

type RandomKeys = KeysOf<Random>   // lel | lal