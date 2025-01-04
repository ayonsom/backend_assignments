const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'src', 'access.log'), { flags: 'a' });
 
// Custom Morgan format
morgan.format('custom', ':method :status :res[content-length] - :response-time ms :date[clf] HTTP/:http-version :url');

// Setup the logger
app.use(morgan('custom', { stream: accessLogStream }));

app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/get-users', (req, res) => {
  res.status(200).send('Get Users');
});

app.post('/add-user', (req, res) => {
  res.status(201).send('User added successfully');
});

app.put('/user/:id', (req, res) => {
  res.status(201).send(`User with ID ${req.params.id} updated successfully`);
});

app.delete('/user/:id', (req, res) => {
  res.send(`User with ID ${req.params.id} deleted successfully`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
