// src/controllers/authController.js
const data = [
  { id: 1, name: 'Item 1', description: 'Description 1' },
  { id: 2, name: 'Item 2', description: 'Description 2' },
  { id: 3, name: 'Item 3', description: 'Description 3' },
];

exports.getLoginPage = (req, res) => {
  res.render('index', { error: null, data: null });
};

exports.postLogin = (req, res) => {
  const { username, password } = req.body;
  if (username === 'ibn' && password === 'ibndev') {
    res.render('index', { error: null, data });
  } else {
    res.render('index', { error: 'Invalid credentials', data: null });
  }
};
