// File: server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
let drinks = [];

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

app.post('/drinks', (req, res) => {
    try {
        const drink = req.body;
        drinks.push(drink);
        res.json(drinks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});