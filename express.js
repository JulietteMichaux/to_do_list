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
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type');
  next();
})

app.post('/tasks', (req, res) => {
  const formData = req.body;
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
  connection.query('SELECT * FROM tasks WHERE id = ?', [idTodo], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('todo par id non récupérée');
    } else {
      res.json(results);
    }
  });
});

app.delete('/tasks/:id', (req, res) => {
  const idTasks = req.params.id
  console.log(idTasks);
  connection.query(`DELETE FROM tasks WHERE id = ${idTasks}`, err => {
    if (err){
      res.status(500).send('smurf');
    } else {
      res.sendStatus(200);
    }
  });
});

app.put('/tasks/:id', (req, res) => {
  const idCategory = req.params.id;
  const formData = req.body;
  console.log(formData);
  console.log(idCategory);
  connection.query(`UPDATE tasks SET ? WHERE id = ${idCategory}`, [formData], (err, results) => {
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