export namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }
  export class Subject {
    public teacher!: Teacher;

    public setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

// Declaration merging: augment Teacher and add Cpp class
export namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
    experienceTeachingReact?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingC) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

// Re-export the Subjects.Subject class as a value alias
export import Subject = Subjects.Subject;
