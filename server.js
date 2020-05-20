const express = require('express');
const mysql = require('mysql');

const app = express();

const port = process.env.PORT || 3001;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '2015',
    database: 'coins'
});


pool.query('SELECT * FROM coins_table1', (err, data) => {
    if (!err) {
        console.log(data);
    }
    else {
        console.log(err);
    }
});


app.get('/', (req, res) => {
    res.send("Домашняя страница");
});

app.listen(port, () => { console.log('Started server at port ' + port); });