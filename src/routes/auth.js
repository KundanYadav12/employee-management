const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const router = express.Router();


const JWT_SECRET = 'your_jwt_secret';

const users = JSON.parse(fs.readFileSync('./users.json'));

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Compare password with hashed password
  const isMatch = bcrypt.compareSync(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
  return res.json({ token });
});

module.exports = router;
