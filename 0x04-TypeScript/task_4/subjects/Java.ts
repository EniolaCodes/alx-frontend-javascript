// Declaration merging to add experienceTeachingC to Teacher interface
export namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }
}

// Merged declaration
export namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number; // Optional attribute
  }
}

// Base Subject class
export class Subject {
  teacher: Subjects.Teacher;

  constructor(teacher: Subjects.Teacher) {
    this.teacher = teacher;
  }
}
export class Java extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Java";
  }

  getAvailableTeacher(): string {
    if (!this.teacher || !this.teacher?.experienceTeachingJava) {
      return "No available teacher";
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
