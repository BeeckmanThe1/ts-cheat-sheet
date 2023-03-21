// ONLY DIFFERENT SYNTAX:


// Objects & function types:
type TestType = {
    memberToImplement: string
    memberToOptionallyImplement: string
    readonly readonlyMember: number
    funckyFunc: () => void
}

// vs:

interface TestInterface {
    memberToImplement: string,
    memberToOptionallyImplement: string
    readonly readonlyMember: number
    funckyFunc: () => void
}

// Implementing:

interface IAnimal {
    name: string;
    eat: () => void;
}

class Dog implements IAnimal {
    eat(): void {}

    name: string;
}

// VS:

type AnimalType = {
    name: string;
    eat: () => void;
}

class Dog2 implements AnimalType {
    eat(): void {
    }

    name: string;
}

// Extending:

interface IPerson {
    name: string
    surname: string
}
interface IHouseOwner {
    address: string
}
interface IPersonWithAddress extends IPerson, IHouseOwner {}

// VS:

type PersonType = {
    name: string
    surname: string
}
type HouseOwnerType = {
    address: string
}
type PersonWithAddressType = PersonType & HouseOwnerType

