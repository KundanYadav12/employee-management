const express = require('express');
const fs = require('fs');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Mock employee data from employees.json
const employees = JSON.parse(fs.readFileSync('./employees.json'));

// Get all employees (protected route)
router.get('/', authMiddleware, (req, res) => {
  res.json(employees);
});

// Add a new employee (protected route)
router.post('/', authMiddleware, (req, res) => {
  const newEmployee = req.body;
  employees.push(newEmployee);
  fs.writeFileSync('./employees.json', JSON.stringify(employees, null, 2));
  res.json(newEmployee);
});

module.exports = router;
