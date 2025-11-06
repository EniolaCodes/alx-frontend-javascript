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
    experienceTeachingReact?: number; // Optional attribute
  }
}

// Base Subject class
export class Subject {
  teacher: Subjects.Teacher;

  constructor(teacher: Subjects.Teacher) {
    this.teacher = teacher;
  }
}

export class React extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for React";
  }

  getAvailableTeacher(): string {
    if (!this.teacher || !this.teacher.experienceTeachingReact) {
      return "No available teacher";
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
