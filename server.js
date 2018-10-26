const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use(express.static('public'))

//TODO: placeholder
let DBtest = []
for (let i = 0; i < 512; i++){
    DBtest.push("#ffffff");
}

app.use('/api', (req, res) => {
    res.status(200)
    //TODO: give this real data
	res.json({
		DBtest
	})
})

app.post('/api', (req, res) => {
	res.status(200)
	res.json({
		message: 'hello world!'
	})
})

app.listen(PORT, () => {
	console.log(`server started on ${PORT}`)
})
