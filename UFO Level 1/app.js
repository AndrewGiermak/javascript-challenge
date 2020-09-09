// from data.js
var tableData = data;
var tbody = d3.select("tbody");


// YOUR CODE HERE!
// Function to build the table
function NewTable(tableData) {
    // Clear existing data
  tbody.html("");
    // Loop and append rows and cells 
  tableData.forEach((dataRow) => {
    var row = tbody.append("tr");
   Object.values(dataRow).forEach((val) => {
     var cell = row.append("td");
       cell.text(val);
     }
   );
 });
}

// Function to search the table by date/time
function SearchTable() {
    // Prevent Refresh 
    d3.event.preventDefault();
    // Get the datetime value entered by user
    var date = d3.select("#datetime").property("value");
    let searchData = tableData;
    // Filter by datetime
    if (date) {
      searchData = searchData.filter(row => row.datetime === date);
    }
   // Build table based on search data
    NewTable(searchData);
  }
  // Event statement for button click 
  d3.selectAll("#filter-btn").on("click", SearchTable;
  
  // Default Loading Page 
  NewTable(tableData);
  
