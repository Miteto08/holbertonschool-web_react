interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home"
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }

    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }

    getCoffeeBreak(): string {
        return "Cannot have a break"
    }

    workTeacherTasks(): string {
        return "Getting to work"
    }
}

function createEmployee(salary: number | string): TeacherInterface | DirectorInterface {
    return typeof salary === "number" && salary < 500 ? new Teacher() : new Director()
}

console.log(createEmployee(200))

function isDirector(
    employee: DirectorInterface | TeacherInterface
): employee is DirectorInterface {
    return (employee as DirectorInterface).workDirectorTasks !== undefined
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
    return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks()
}

type Subjects = "Math" | "History"

function teachClass(todayClass: Subjects): string {
    return todayClass === "Math" ? "Teaching Math" : todayClass === "History" ? "Teaching History" : undefined
}