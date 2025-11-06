/// <reference path="./crud.d.ts" />

// Import types from interface.ts
import { RowID, RowElement } from "./interface.ts";

// Import everything from crud.js as CRUD
import * as CRUD from "./crud.d.ts";

// Create a row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row and get new ID
const newRowID: RowID = CRUD.insertRow(row);

// Create updated row with age
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Update and delete row
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
