const express = require('express');

const port = process.env.PORT || 3001;

const app = express();
const mysql = require('mysql');

app.get('/', (req, res) => {
    res.send("Домашняя страница");
});

app.listen(port, () => { console.log('Started server at port ' + port); });