const router = require('express').Router()

// Get all subscribers
router.get('/', (req, res) => {
  res.send('Hello World!')
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

module.exports = router