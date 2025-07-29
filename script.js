let editIndex = -1;

function addUser() {
  const fName = document.getElementById("firstName").value.trim();
  const lName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!fName || !lName || !email || !phone) {
    alert("Plotesoni të gjitha fushat!");
    return;
  }

  const table = document
    .getElementById("userTable")
    .getElementsByTagName("tbody")[0];

  if (editIndex === -1) {
    const row = table.insertRow();
    row.innerHTML = `
    <td>${fName}</td>
    <td>${lName}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>
    <button onclick="editUser(this)">Edit</button>
    <button onclick="deleteUser(this)">Delete</button></td>`;
  } else {
    const row = table.rows[editIndex];
    row.cells[0].innerText = fName;
    row.cells[1].innerText = lName;
    row.cells[2].innerText = email;
    row.cells[3].innerText = phone;
    editIndex = -1;
  }

  resetForm();
}

function resetForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

function deleteUser(btn) {
  const row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function editUser(btn) {
  const row = btn.parentNode.parentNode;
  editIndex = row.rowIndex - 1;
  document.getElementById("firstName").value = row.cells[0].innerText;
  document.getElementById("lastName").value = row.cells[1].innerText;
  document.getElementById("email").value = row.cells[2].innerText;
  document.getElementById("phone").value = row.cells[3].innerText;
}

function saveData() {
  alert("Të dhënat janë ruajtur!");
}

function cancelChanges() {
  if (confirm("A jeni i sigurtë që doni të anuloni ndryshimet?")) {
    location.reload();
  }
}
