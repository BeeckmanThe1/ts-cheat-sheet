// Interfaces can do "Declaration merging"

interface IPerson {
    firstName: string
    surname: string
}

interface IPerson {
    birthLocation: string
}

const somePerson: IPerson = {
    birthLocation: "",
    firstName: "",
    surname: ""
}

// THIS DOES NOT WORK FOR TYPES!

// Interfaces can do "Declaration merging"

type PersonType = {
    firstName: string
    surname: string
}

// TS2300: Duplicate identifier 'PersonType'.
type PersonType = {
    birthLocation: string
}

type somePerson: PersonType = {

}