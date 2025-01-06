const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});

db.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to database');
    }
});

app.get('/pooppoint', (req, res) => {
    db.query('SELECT * FROM pooppoint', (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        };
    });
});

app.post('/pooppoint', (req, res) => {
    const { title, latitude, longitude } = req.body;
    db.query('INSERT INTO pooppoint (title, latitude, longitude) VALUES (?, ?, ?)', [title, latitude, longitude], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(201);
        };
    });
})

app.listen(port, () => {
    console.log(`Serveur backend démarré sur http://localhost:${port}`);
});
