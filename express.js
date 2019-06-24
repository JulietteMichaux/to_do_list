const express = require('express');
const app = express();
const port = 8000;

const connection = require('./conf');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})

app.post('/tasks', (req, res) => {
  const formData = req.body;
  console.log(formData);
  connection.query('INSERT INTO tasks SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Sauvegarde in tasks impossb');
    } else {
      res.json(results);
    }
  });
});

app.get('/tasks', (req, res) => {
  connection.query('SELECT * FROM tasks', (err, results) => {
  console.log(results);
  if (err) {
    console.log(err);
    res.status(500).send('error dans la récupération des todo');
   } else {
      res.json(results);
    }
    });
});

app.get('/tasks/:id', (req, res) => {
  const idTodo = req.params.id;
  console.log(idTodo);
  connection.query('SELECT * FROM tasks WHERE id = ?', [idTodo], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('todo par id non récupérée');
    } else {
      res.json(results);
    }
  });
});

app.delete('/tasks', (req, res) => {
  connection.query('SELECT * FROM tasks', (err, results) => {
  });
});

app.put('/tasks', (req, res) => {
  const idTodo = req.params.id;
  const formData = req.body;
  console.log(formData);
  connection.query('UPDATE tasks SET ? WHERE id = ?', [formData, idTodo], (err, results) => {
  if (err) {
    res.status(500).send('erreur de modif');
  } else {
    res.json(results);
  }
  });
});


app.listen(port, function () {
  console.log(`to_do_list is listening on port ${port}`)
})