// Create web server
const express = require('express');
// Create web server
const app = express();
// Create web server
app.listen(3000);
// Create web server
app.use(express.static('public'));
// Create web server
app.use(express.json());
// Create web server
const comments = [];
// Create web server
app.get('/comments', (req, res) => {
  res.json(comments);
});
// Create web server
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});
// Create web server
app.delete('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  comments.splice(id, 1);
  res.json(id);
});
// Create web server
app.put('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  comments[id] = req.body;
  res.json(comments[id]);
});
// Create web server
app.use((req, res) => {
  res.status(404).send('Not found');
});
// Create web server
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
// Create web server
const port = process.env.PORT || 3000;
// Create web server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
//