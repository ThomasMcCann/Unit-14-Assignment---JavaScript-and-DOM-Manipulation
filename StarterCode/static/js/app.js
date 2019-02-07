// from data.js
var tableData = data;

//select tbody for data bind with d3
let tbody = d3.select("tbody");

//create sighting table for index.html
function table(data) {
  tbody.html("index");

//loop through each sighting
  data.forEach((sighting) => {

//append body with table row
let row = tbody.append("tr");

//call object values from data
Object.values(sighting).forEach((event) => {

//append cells with event values
let sightingData = row.append("td");
        sightingData.text(event);
});
});
}

//define search button with date request on click
function buttonClick() {
d3.event.preventDefault();
    let date = d3.select("#datetime").property("value");

//define new table data as that requested by search date
    let requestedData = tableData;
    if (date) {
    requestedData = requestedData.filter(row => row.datetime === date);
  }
table(requestedData);
}
d3.selectAll("#filter-btn").on("click", buttonClick);
table(tableData);

