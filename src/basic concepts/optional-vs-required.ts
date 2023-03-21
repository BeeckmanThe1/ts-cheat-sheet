type Person = {
    firstname: string
    lastName: string
    age: number
    birthday?: string  // OPTIONAL
    address?: string   // OPTIONAL
}

type PartialPerson = Partial<Person>
type StrictPerson = Required<Person>

const person1: Person = {
    firstname: "Jason",
    lastName: "De Rulo",
    age: 27,
    birthday: '12-08-1990',
    address: undefined  // to stretch the optionalness
}

const person2: PartialPerson = {
    firstname: "Ernest"
    // Almost nothing is implemented. Usecase? getMockedData in unit tests!
}

const person3: StrictPerson = {
    firstname: "Jacobus",
    lastName: "Verbrugge",
    address: "kortebergstraat 122",
    age: 33,
    birthday: "01/04/1998"
}