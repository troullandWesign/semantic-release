const express = require('express');
const app = express();
const port = 3000;

app.get('/addition', (req, res) => {
    const { a, b } = req.query;
    const sum = parseFloat(a) + parseFloat(b);
    res.json({ result: sum });
});

//ajout de la division
app.get('/division', (req, res) => {
    const { a, b } = req.query;
    const division = parseFloat(a) / parseFloat(b);
    console.log('division', division);
    res.json({ result: division });
});

app.listen(port, () => {
    console.log(`Serravssser is running at http://localhost:${port}`);
});
