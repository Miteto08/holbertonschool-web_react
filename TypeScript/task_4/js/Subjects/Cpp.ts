namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp'
        }

        getAvailableTeacher(): string {
            return !this.teacher || this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0 ? 'No available teacher' : `Available Teacher: ${this.teacher.firstName}`
        }
    }
}