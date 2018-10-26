let board = []
const scl = 25
const API = 'http://localhost:5000/api'

function setup(){
	createCanvas(800,400)
    
	for (let y = 0; y < height / scl; y++){
		for (let x = 0; x < width / scl; x++){
			board.push({
				x,
				y,
				color: '#ffffff',
				draw() {

					const color = hexToRgb(this.color)
        
					if (findTile() == board.indexOf(this)){
						fill(0)
					}else {
						fill(color.r, color.g, color.b)
					}

					rect(this.x * scl, this.y * scl, scl, scl)
				}
			})
		}
	}
    
	getTiles()
}

function draw(){
	background(0)
    
	for (tile in board){
		board[tile].draw()
	}
}

function mousePressed(){
	alert(findTile())
}

function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null
}

function getTiles(){
	fetch(API)
		.then(function(response) {
			return response.json()
		})
		.then(function(data) {
			console.table(data)
		})
}

function findTile(){
	for (tile in board){
		if ((board[tile].x == floor(mouseX / scl)) && (board[tile].y == floor(mouseY / scl))){
			return tile
		}
	}
	return -1
}