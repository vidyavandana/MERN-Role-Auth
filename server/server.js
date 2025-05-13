const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const formRoutes = require('./routes/formRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route to check server health
app.get('/api/ping', (req, res) => {
  res.send("Server is alive");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/forms', formRoutes);  // ✅ Must exist

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
