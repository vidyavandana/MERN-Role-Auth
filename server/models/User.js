const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true, enum: ['admin', 'guest'] }
});

module.exports = mongoose.model('User', UserSchema);
