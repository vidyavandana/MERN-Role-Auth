const express = require('express');
const Form = require('../models/Form');
const router = express.Router();

// Create a new form entry
router.post('/', async (req, res) => {
  const { name, address, pin, phone } = req.body;
  
  try {
    const newForm = new Form({ name, address, pin, phone });
    await newForm.save();
    res.status(201).json(newForm);
  } catch (err) {
    res.status(500).json({ message: 'Error creating form', error: err.message });
  }
});

// Get all form entries
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching forms', error: err.message });
  }
});

// Update a form entry
router.put('/:id', async (req, res) => {
  try {
    const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedForm);
  } catch (err) {
    res.status(500).json({ message: 'Error updating form', error: err.message });
  }
});

// Delete a form entry
router.delete('/:id', async (req, res) => {
  try {
    await Form.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Form deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting form', error: err.message });
  }
});

module.exports = router;