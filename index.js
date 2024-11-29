const express = require('express');
const app = express();
const port = 3000;

app.get('/addition', (req, res) => {
    const { a, b } = req.query;
    const sum = parseFloat(a) + parseFloat(b);
    res.json({ result: sum });
});

app.listen(port, () => {
    console.log(`Serrver is running at http://localhost:${port}`);
});
