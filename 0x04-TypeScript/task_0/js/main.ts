interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Wick",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Emma",
  lastName: "Salt",
  age: 22,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

// Create and render the table
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Create header row
const headerRow: HTMLTableRowElement = thead.insertRow(0);
const firstNameHeader: HTMLTableCellElement = headerRow.insertCell(0);
const locationHeader: HTMLTableCellElement = headerRow.insertCell(1);
firstNameHeader.textContent = "First Name";
locationHeader.textContent = "Location";

// Add table headers to table
table.appendChild(thead);
table.appendChild(tbody);

// Create and append a row for each student
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = tbody.insertRow();
  const firstNameCell: HTMLTableCellElement = row.insertCell(0);
  const locationCell: HTMLTableCellElement = row.insertCell(1);

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Add table to the document body
body.appendChild(table);

// Add some basic styling
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";

// Add CSS styles
const style: HTMLStyleElement = document.createElement("style");
style.textContent = `
    table {
        border: 1px solid black;
        border-collapse: collapse;
    }
    td, th {
        border: 1px solid black;
        padding: 8px;
    }
    th {
        background-color: #f2f2f2;
    }
`;
document.head.appendChild(style);
