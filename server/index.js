require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(express.json());
app.use(cors());

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const context = `You are an intelligent AI assistant for a "Student Management Platform" created by Dub Technologies.
    Your role is to help users with:
    - Navigating the dashboard (PDFs, Students, Profile).
    - Explaining features: storing PDFs, managing student records, tracking attendance.
    - Providing technical support for this specific website.
    
    Strictly adhere to these rules:
    1. Only answer questions related to this project/website.
    2. If asked about general topics (like history, math, weather, etc.), politely refuse and say you can only help with the Student Management Platform.
    3. Be professional, concise, and helpful.
    
    User Query: ${message}`;

    const result = await model.generateContent(context);
    const response = await result.response;
    const text = response.text();
    res.json({ reply: text });
  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ error: error.message || "Failed to fetch response" });
  }
});

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

// Get all employees (students)
app.get('/employees', async (req, res) => {
  try {
    const employees = await EmployeeModel.find().limit(10); // Limit to 10 records
    res.status(200).json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
});

// Create payment intent
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // amount in cents

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'inr',
      payment_method_types: ['card', 'upi'],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Record purchase
app.post('/record-purchase', async (req, res) => {
  const { email, pdfId } = req.body;
  try {
    await EmployeeModel.updateOne(
      { email: email },
      { $addToSet: { purchasedPdfs: pdfId } }
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to record purchase' });
  }
});

// Get user purchases
app.get('/user-purchases/:email', async (req, res) => {
  try {
    const user = await EmployeeModel.findOne({ email: req.params.email });
    res.json(user ? user.purchasedPdfs : []);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch purchases' });
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});