interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // This allows for additional attributes of any type
}

// Example usage:
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: true, // Additional attribute
};

// Directors interface extends Teacher and requires numberOfReports
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example Director
const director1: Directors = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "San Francisco",
  numberOfReports: 5,
  department: "Engineering",
};

// Interface describing the function type for printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// printTeacher: returns the first initial of firstName and the full lastName
const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  const initial = firstName && firstName.length > 0 ? firstName.charAt(0) : "";
  return `${initial}. ${lastName}`.trim();
};

// Example usages
const out1: string = printTeacher("John", "Wick"); // "J. Wick"
const out2: string = printTeacher("E", "Smith"); // "E. Smith"

// --- StudentClass: interfaces and implementation ---

// Interface describing the shape of a Student instance (the class contract)
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  displayName(): string;
  workOnHomework(): string;
}

// Interface describing the constructor signature for StudentClass
interface StudentClassConstructor {
  // a constructor that takes firstName and lastName and returns a StudentClassInterface
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Concrete class implementing StudentClassInterface
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const studentInstance: StudentClassInterface = new StudentClass(
  "Tom",
  "Holland"
);
const working: string = studentInstance.workOnHomework(); // "Currently working"
const nameDisplayed: string = studentInstance.displayName(); // "Tom"
