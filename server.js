const express = require('express');
const mysql = require('mysql');

const app = express();

const port = process.env.PORT || 3001;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2015',
    database: 'coins'
});

connection.connect((err) => {
    if(!err) {
        console.log('Connected to database');
        connection.query('SELECT * FROM coins_table1', (err, data) => {
            if (!err) {
                console.log(data);
            }
            else {
                console.log(err);
            }
        });
    }
    else {
        console.log("Database connection error");
    }
});

//connection.end();

app.get('/', (req, res) => {
    res.send("Домашняя страница");
});

app.listen(port, () => { console.log('Started server at port ' + port); });