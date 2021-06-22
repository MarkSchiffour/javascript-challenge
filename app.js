// from data.js
var tableData = data;

//reference the 
var tbody = d3.select("tbody");

// function to build the table
function buildTable(data){

    // remove any existing data
    tbody.html("");

    // take the data and build the data
    // loop through each object
    // each object is going to be a row in the table
    data.forEach((dataRow) => {
        // add a row to the html table
        var row = tbody.append("tr");

        //use the Object.values in order to get the table data

        Object.values(dataRow).forEach((value) => {
            // create a new cell to house the data
            var cell = row.append("td");
            // populate the new cell
            cell.text(value);
        });
    });
}

// function that will do the filtering
function filterData(){
    // get the filters that we want to apply value form
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");
    // variable that will be th filtered data
    var filtered = tableData;
    var filtered_City = tableData;
    var filtered_State = tableData;
    var filtered_Country = tableData;
    var filtered_Shape = tableData;
    // check to see if the date was entered 
    if(date){
        // if the date is a not empty this will use the filter
        // the filter removes the values that do not equal what is in the filter
        filtered = filtered.filter(row => row.datetime == date);
        buildTable(filtered);
    }
    else if(city){
        filtered_City = filtered_City.filter(row => row.city == city);
        buildTable(filtered_City);
    }
    else if(state){
        filtered_State = filtered_State.filter(row => row.state == state);
        buildTable(filtered_State);
    }
    else if(country){
        filtered_Country = filtered_Country.filter(row => row.country == country);
        buildTable(filtered_Country);
    }
    else if(shape){
        filtered_Shape = filtered_Shape.filter(row => row.shape == shape);
        buildTable(filtered_Shape);
    }
    else
    buildTable(data);
    // create a new table that is only the filtered data
    //buildTable(filtered);   
}
// atttach an event to the listen for the button click and pass in the date for the form
d3.selectAll("#filter-btn").on("click", filterData);

// call function
buildTable(tableData);


