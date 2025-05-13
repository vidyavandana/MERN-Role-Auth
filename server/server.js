const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const formRoutes = require('./routes/formRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: 'https://mern-role-auth.vercel.app',
  credentials: true
}));
app.use(express.json());
app.get('/api/ping', (req, res) => {
  res.send("Server is alive");
});
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
app.use('/api/users', userRoutes);
app.use('/api/forms', formRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
