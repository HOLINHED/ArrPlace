let board = []
const scl = 25
const API = 'http://localhost:5000/api'

let userColor = '#000000'

function setup(){
	createCanvas(800,400)
    
	for (let y = 0; y < height / scl; y++){
		for (let x = 0; x < width / scl; x++){
			board.push({
				x,
				y,
				color: '#ffffff',
				draw() {
					fill(this.color)

					stroke(invertColor(this.color))

					findTile() == board.indexOf(this) ? strokeWeight(1) : noStroke()

					rect(this.x * scl, this.y * scl, scl, scl)
				}
			})
		}
	}
	getTiles()
}

function draw(){
	background(0)
    
	for (tile in board) board[tile].draw()
}

function mousePressed(){
	let tile = findTile()
	tile != -1 ? 
		fetch(API, {
			method: 'POST',
			body: JSON.stringify({ tile, color: userColor }),
			headers: {
				'content-type' : 'application/json'
			}
		})
			.then(response => response.json())
			.catch(error => console.error('Error:', error))
			.then(response => {
				for (tile in board) board[tile].color = response.board[tile]
			}) : null
}

document.querySelector('#submit').onclick = function() { 
	userColor = document.getElementById('color').value || '#000000'
	document.getElementById('user_color').innerHTML = document.getElementById('color').value || '#000000' 
}

function getTiles(){
	fetch(API)
		.then(function(response) {
			return response.json()
		})
		.then(function(data) {
			for (tile in board) board[tile].color = data.board[tile]
		})
}

function findTile(){
	for (tile in board) if ((board[tile].x == floor(mouseX / scl)) && (board[tile].y == floor(mouseY / scl))) return tile
	return -1
}

function invertColor(hex) {
	if (hex.indexOf('#') === 0) {
		hex = hex.slice(1)
	}
	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
	}
	if (hex.length !== 6) {
		throw new Error('Invalid HEX color.')
	}

	var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
		g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
		b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16)

	return '#' + padZero(r) + padZero(g) + padZero(b)
}

function padZero(str, len) {
	len = len || 2
	var zeros = new Array(len).join('0')
	return (zeros + str).slice(-len)
}