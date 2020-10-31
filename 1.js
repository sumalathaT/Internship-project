var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["staff_id"] = document.getElementById("staff_id").value;
    formData["fullname"] = document.getElementById("fullname").value;
    formData["phoneno"] = document.getElementById("phoneno").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("staffdetails").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.staff_id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phoneno;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("staff_id").value = "";
    document.getElementById("fullname").value = "";
    document.getElementById("phoneno").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("staff_id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fullname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phoneno").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.staff_id;
    selectedRow.cells[1].innerHTML = formData.fullname;
    selectedRow.cells[2].innerHTML = formData.phoneno;
    selectedRow.cells[3].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("staffdetails").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("staff_id").value == "") {
        isValid = false;
        document.getElementById("staff_idValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("staff_idValidationError").classList.contains("hide"))
            document.getElementById("staff_idValidationError").classList.add("hide");
    }
    return isValid;
}

