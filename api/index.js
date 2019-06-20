const express = require('express');
const mysql = require('mysql');
const api = express();

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
})

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "to_do_list",
  password: ""
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MYSQL connected ..");
});

api.get('/', (req, res) => {
  res.send('ok, good');
});

api.get('/todo', (req, res) => {
  connection.query('SELECT * FROM tasks',(err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

api.listen(3000,(err) => {
  if(err) throw err;
  console.log('API running ..');
})