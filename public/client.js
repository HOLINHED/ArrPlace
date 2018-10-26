let board = []
const scl = 25

function setup(){
	createCanvas(800,400)
    
	for (let x = 0; x < width / scl; x++){
		for (let y = 0; y < height / scl; y++){
			board.push({
				x: x * scl,
				y: y * scl,
				color: '#ffffff'  
			})
		}
	}
}

function draw(){
    background(0)
    
	for (tile in board){
        const color = hexToRgb(board[tile].color);
        fill(color.r,color.g,color.b)
        rect(board[tile].x, board[tile].y, scl)
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