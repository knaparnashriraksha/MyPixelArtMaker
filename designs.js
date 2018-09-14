// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
	// Get the element ids of height, width and table 
	let height = document.getElementById('input_height').value;
	let width = document.getElementById('input_width').value;
	var table = document.getElementById('pixel_canvas');

	// When the function is called, the table must initially be empty
	table.innerHTML = "";

	// Draw the table with the selected number of rows and columns
	var row,col,fillColor;
	for(var i = 0; i<height; i++){
	    var row = table.insertRow(i);
		row.setAttribute("class","rowElement");
		for(var j=0;j<width;j++){
			var col = row.insertCell(j);
			// When the cell of a table is clicked, it must be filled with the selected color
			col.addEventListener('click', function(event){
				event.target.style.backgroundColor = document.getElementById("colorPicker").value
	        });
	    }
	}
}