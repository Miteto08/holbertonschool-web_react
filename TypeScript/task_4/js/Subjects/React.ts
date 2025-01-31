namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number
    }

    export class React extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for React'
        }

        getAvailableTeacher(): string {
            return !this.teacher || this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact <= 0 ? 'No available teacher' : `Available Teacher: ${this.teacher.firstName}`
        }
    }
}