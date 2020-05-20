const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 3001;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '2015',
    database: 'coins'
});

app.get('/coins', (req, res) => {
    pool.query('SELECT * FROM coins_table1', (err, data) => {
        if (err) {
            res.status(500);
        }
        else {
            res.json(data);
        }
    });
});

app.listen(port, () => { console.log('Started server at port ' + port); });