import { Subjects } from "../subjects/Subject";
import "../subjects/Cpp";
import "../subjects/Java";
import "../subjects/React";

// Create instances of each subject
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: "Charles",
  lastName: "Nguyen",
  experienceTeachingC: 10,
};

// Cpp class extending Subject

// Base Subject class
// export class Subject {
//   teacher: Subjects.Teacher;

//   constructor(teacher: Subjects.Teacher) {
//     this.teacher = teacher;
//   }
// }

export class Cpp extends Subjects.Subject {
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

// Logging to the console
console.log("C++");

const cppCourse = new Cpp(cTeacher);
console.log(cppCourse.getRequirements());
console.log(cppCourse.getAvailableTeacher());

export namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
    experienceTeachingJava?: number;
  }
}

// Reuse the existing cTeacher object
export const cTeacher: Subjects.Teacher = {
  firstName: "Charles",
  lastName: "Nguyen",
  experienceTeachingC: 10,
  experienceTeachingJava: 0, // Set to 0 or undefined to test fallback
};

// Base Subject class
// export class Subject {
//   teacher: Subjects.Teacher;

//   constructor(teacher: Subjects.Teacher) {
//     this.teacher = teacher;
//   }
// }
// Java class extending Subject
export class Java extends Subjects.Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Java";
  }

  getAvailableTeacher(): string {
    if (
      this.teacher.experienceTeachingJava &&
      this.teacher.experienceTeachingJava > 0
    ) {
      return `Available Teacher: ${this.teacher.firstName}`;
    } else {
      return "No available teacher";
    }
  }
}

// Logging to the console
console.log("Java");

const javaCourse = new Java(cTeacher);
console.log(javaCourse.getRequirements());
console.log(javaCourse.getAvailableTeacher());

// React class extending Subject
// export class React extends Subject
export class React extends Subjects.Subject {
  getRequirements(): string {
    return "Here is the list of requirements for React";
  }

  getAvailableTeacher(): string {
    if (
      this.teacher.experienceTeachingReact &&
      this.teacher.experienceTeachingReact > 0
    ) {
      return `Available Teacher: ${this.teacher.firstName}`;
    } else {
      return "No available teacher";
    }
  }
}

// Logging to the console
console.log("React");

const reactCourse = new React(cTeacher);
console.log(reactCourse.getRequirements());
console.log(reactCourse.getAvailableTeacher());
