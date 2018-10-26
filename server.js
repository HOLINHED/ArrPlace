const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(express.static('public'));

app.use('/api', (req, res) => {
    res.status(200);
    res.json({
        message: 'Hello world!'
    });
});

app.post('/api', (req, res) => {
    res.status(200);
    res.json({
        message: 'hello world!'
    });
});

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
});
