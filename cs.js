<script type="text/javascript">
    function CreateExcelSheet() {
        var i, j, str,
                myTable = document.getElementById('mytable'),
                rowCount = myTable.rows.length,
                excel = new ActiveXObject('Excel.Application');// Activates Excel
        excel.Workbooks.Add(); // Opens a new Workbook
        excel.Application.Visible = true; // Shows Excel on the screen
        for (i = 0; i < rowCount; i++) {
            for (j = 0; j < myTable.rows[i].cells.length; j++) {
                str = myTable.rows[i].cells[j].innerText;
                excel.ActiveSheet.Cells(i + 1, j + 1).Value = str; // Writes to the sheet
            }
        }
        return;
    }
</script>