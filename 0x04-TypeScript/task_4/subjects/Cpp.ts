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
    experienceTeachingC?: number; // Optional attribute
  }
}

// Base Subject class
export class Subject {
  teacher: Subjects.Teacher;

  constructor(teacher: Subjects.Teacher) {
    this.teacher = teacher;
  }
}

// Cpp class extending Subject
export class Cpp extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Cpp";
  }

  getAvailableTeacher(): string {
    if (
      this.teacher.experienceTeachingC &&
      this.teacher.experienceTeachingC > 0
    ) {
      return `Available Teacher: ${this.teacher.firstName}`;
    } else {
      return "No available teacher";
    }
  }
}
