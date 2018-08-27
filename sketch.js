var cols = 10;
var rows = 10;

var colors = [];

var colors = new Array(cols);

function make2Darray(cols, row) {

	var arr = new Array(cols);
	for (var i = 0; i < arr.lenght; i++){
		arr[i] = new Array(rows);
	}
	return arr;
}

function setup() {
  createCanvas(400, 400);
	colors = make2Darray(cols, rows);	
	for (var i = 0; i < cols; i++)
	{
		colors [i] = new Array(rows);
		for ( var j = 0; j < rows;j++){
			colors [i] [j] = random(255);
		}
	}
}

function draw() {
  background(51);
	
	for (var i = 0; i < cols; i++) {
	for (var j = 0; j < rows; j++) {
		var x = i * 30;
		var y = j * 30;
		fill(colors[i][j], random(255), random (255));
		stroke(0);
		rect(x, y , 30 ,30);
    
    

    
	}
	}
}