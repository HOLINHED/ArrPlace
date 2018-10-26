let board = []
const scl = 25

function setup(){
	createCanvas(800,400)
    
	for (let x = 0; x < width / scl; x++){
		for (let y = 0; y < height / scl; y++){
			board.push({
				x,
				y,
				color: '#ffffff',
				draw() {

					const color = hexToRgb(this.color)
        
					if ((this.x == floor(mouseX / scl)) && (this.y == floor(mouseY / scl))){
						fill(0)
					}else {
						fill(color.r, color.g, color.b)
					}

					rect(this.x * scl, this.y * scl, scl, scl)
				}
			})
		}
	}
}

function draw(){
	background(0)
    
	for (tile in board){
		board[tile].draw()
	}
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
	//TODO: make this get data from the api
	const tiles = {
		board: []
	}
	return tiles
}