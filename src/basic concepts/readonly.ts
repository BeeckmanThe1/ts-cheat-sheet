// readonly & const

const test = {
    value: 'lal'
} as const  // marks all members as readonly

test.value = ''  // TS2540: Cannot assign to 'value' because it is a read-only property.
test.lel = ''  // TS2339: Property 'lel' does not exist on type '{ readonly value: string; }'.

// completely similar to:
const test2: { readonly value: string } = {value: 'lal'}
test2.value = ''  // TS2540: Cannot assign to 'value' because it is a read-only property.
test2.lel = ''  // TS2339: Property 'lel' does not exist on type '{ readonly value: string; }'.
