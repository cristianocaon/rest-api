const router = require('express').Router();
const Subscriber = require('../models/subscriber');

// Get all subscribers
router.get('/', async (req, res) => {
  try {
  const subscribers = await Subscriber.find();
  res.status(200).json(subscribers);    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

// Get a specific subscriber
router.get('/:id', (req, res) => {
  
})

// Create one subscriber
router.post('/', (req, res) => {
  
})

// Update specific subscriber
router.patch('/:id', (req, res) => {
  
})

// Delete specific subscriber
router.delete('/:id', (req, res) => {
  
})

module.exports = router;