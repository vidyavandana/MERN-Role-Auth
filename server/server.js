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
app.use(cors({
  origin: [
    'http://localhost:5173',                  // for local dev
    'https://your-frontend.vercel.app'        // replace with actual Vercel frontend domain
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/forms', formRoutes);

// Optional health check route (helpful for Render monitoring)
app.get('/api/ping', (req, res) => {
  res.send('Server is alive ✅');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
