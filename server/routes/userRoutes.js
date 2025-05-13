const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/save-role', async (req, res) => {
  const { email, role } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, role });
      await user.save();
    } else {
      user.role = role;
      await user.save();
    }
    res.status(200).json({ message: 'Role saved', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/role/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ role: user.role });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
