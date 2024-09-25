const createTable = document.getElementById("create_table");
const resetTable = document.getElementById("reset_table");
const addRow = document.getElementById("add_row");
const addColumn = document.getElementById("add_column");
const tableContent = document.getElementById("table_content");

let table;

createTable.addEventListener("click", () => {
  const rowCount = document.getElementById("rows").value;
  const colCount = document.getElementById("columns").value;

  if (rowCount < 1 || colCount < 1) {
    alert("Row and column must be greater than 0.");
    return;
  }

  tableContent.innerHTML = "";

  table = document.createElement("table");

  for (let i = 0; i < rowCount; i++) {
    const row = table.insertRow();
    for (let j = 0; j < colCount; j++) {
      const cell = row.insertCell();
      cell.textContent = `R${i + 1}C${j + 1}`;
    }
  }

  tableContent.appendChild(table);

  resetTable.disabled = false;
  addRow.disabled = false;
  addColumn.disabled = false;
});

addRow.addEventListener("click", () => {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  const newRow = table.insertRow();
  for (let i = 0; i < colCount; i++) {
    const cell = newRow.insertCell();
    cell.textContent = `R${rowCount + 1}C${i + 1}`;
  }
});

addColumn.addEventListener("click", () => {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  for (let i = 0; i < rowCount; i++) {
    const cell = table.rows[i].insertCell();
    cell.textContent = `R${i + 1}C${colCount + 1}`;
  }
});

resetTable.addEventListener("click", () => {
  resetTable.disabled = true;
  addRow.disabled = true;
  addColumn.disabled = true;

  tableContent.innerHTML = "";

  table = null;

  document.getElementById("rows").value = "";
  document.getElementById("columns").value = "";
});
