const express = require('express');
const { add, subtract } = require('./math');

const app = express();
const PORT = 3000;

app.get('/add', (req, res) => {
    const { a, b } = req.query;
    const result = add(Number(a), Number(b));
    res.send(`Result: ${result}`);
});

app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const result = subtract(Number(a), Number(b));
    res.send(`Result: ${result}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
