// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src/styles'));

app.use('/', authRoutes);

// Sample JSON data
const jsonData = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'Mike Johnson', age: 35 }
];

// Route to serve JSON data
app.get('/data', (req, res) => {
  res.json(jsonData);
});


// Route to render the EJS template
app.get('/show-data', (req, res) => {
  res.render('data');
});

// Route to render the login page
app.get('/', (req, res) => {
  res.render('index', { error: null });
});

// Route to handle login form submission
app.post('/login', (req, res) => {
  console.log(req.body); // Log the request body to check if it is being parsed correctly
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    res.redirect('/show-data');
  } else {
    res.render('index', { error: 'Invalid username or password' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
