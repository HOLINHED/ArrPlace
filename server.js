const express = require('express')
const fs = require('fs')

let board = JSON.parse(fs.readFileSync('data.json'))

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use(express.static('public'))

app.get('/api', (req, res) => {
	res.status(200)

	res.json({
		board: board.board
	})
})

app.post('/api', (req, res) => {
	res.status(200)
    
	board.board[req.body.tile] = fixHex(req.body.color)

	res.json({
		board: board.board
	})

	fs.writeFile('data.json', JSON.stringify(board), (err) => {
		err ? console.log(err) : null
	})
})

app.listen(PORT, () => {
	console.log(`server started on ${PORT}`)
})

function fixHex(string) {

	string = string.trim().replace(/[^a-fA-F0-9]/g, '').toLowerCase()

	if (string.length <= 0) return '#000000'

	if (string.length >= 7) return '#' + string.substring(0,6)

	if (string.length <= 2){

		let newString = ''
        
		const addAmount = 6 / string.length

		for (let i = 0; i < addAmount; i++) newString += string

		return '#' + newString
	} 
    
	const remainder = string.length % 3
	const divisor = Math.floor(string.length / 3)
    
	const sep1 = remainder === 2 || remainder === 1 ? 1 : 0
	const sep2 = remainder === 1 || remainder === 0 ? 0 : 1
    
	const string1 = string.slice(0, divisor + sep1)
	const string2 = string.slice(divisor + sep1, (divisor * 2) + sep1 + sep2)
	const string3 = string.slice((divisor * 2) + sep1 + sep2)

	return '#' + hexFormat(string1) + hexFormat(string2) + hexFormat(string3)
}

function hexFormat(hex) {
	if (hex.length === 1) return hex + hex
	return hex
}