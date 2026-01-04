const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/employee')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await EmployeeModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ error: 'Incorrect email' }); // Return error for incorrect email
    }

    if (user.password !== password) {
      return res.status(400).json({ error: 'Incorrect password' }); // Return error for incorrect password
    }

    res.status(200).json({ message: 'Successful' }); // Successful login
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' }); // Handle server errors
  }
});

// Register route
app.post('/register', async (req, res) => {
  try {
    const newEmployee = await EmployeeModel.create(req.body);
    res.status(201).json(newEmployee); // Return the created employee
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to register user' }); // Handle registration errors
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});