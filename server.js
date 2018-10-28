const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use(express.static('public'))

//TODO: testing purposes
let DBtest = []
for (let i = 0; i < 512; i++) DBtest.push('#ffffff')

app.get('/api', (req, res) => {
    res.status(200)

	res.json({
		board: DBtest
	})
})

//TODO: also give this real data
app.post('/api', (req, res) => {
    res.status(200)
    
    DBtest[req.body.tile] = fixHex(req.body.color)

    res.json({board: DBtest})
})

app.listen(PORT, () => {
	console.log(`server started on ${PORT}`)
})

//TODO: make this function nice
function fixHex(hex){
    
	let newString = hex.trim().replace(/[^a-fA-F0-9]/g, '').toLowerCase()

    if (!newString.startsWith('#')) newString = '#' + newString
    
    if (newString.length > 7) newString = newString.substring(0, 8)

	if (newString.length == 2) for (let i = 0; i < 5; i++) newString += newString.charAt(1)

	if (newString.length == 3) for (let i = 0; i < 2; i++) newString += newString.substring(1, 3)

	if (newString.length == 4) newString += newString.substring(1, 4)

	if (newString.length == 5) newString += newString.substring(1, 3)

	if (newString.length == 6) newString += newString.charAt(5)

	return newString
}