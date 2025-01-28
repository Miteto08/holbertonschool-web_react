interface Teacher {
    readonly firstName: string
    readonly lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string
    [key: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`
}

interface StudentClassInterface {
    workOnHomework(): string
    displayName(): string
}

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface
}

class StudentClass implements StudentClassInterface {
    constructor(private firstName: string, private lastName: string) { }

    workOnHomework(): string {
        return "Currently working"
    }

    displayName(): string {
        return `${this.firstName}`
    }
}