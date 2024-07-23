const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const path = process.argv[2];
  if (!path) {
    res.status(500).send('Database path is missing');
    return;
  }
  countStudents(path)
    .then((result) => {
      res.send(`This is the list of our students\n${result}`);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

app.use((req, res) => {
  res.status(404).send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET ${req.url}</pre>
</body>
</html>`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
