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
});

// Get a specific subscriber
router.get('/:id', getSubscriber, (req, res) => {
  res.json(res.subscriber)
});

// Create one subscriber
router.post('/', (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedChannel: req.body.subscribedChannel
  });

  try {
    const newSubscriber = subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});

// Update specific subscriber
router.patch('/:id', (req, res) => {
  
});

// Delete specific subscriber
router.delete('/:id', getSubscriber, async (req, res) => {
  try {
    await res.subscriber.remove();
    res.json({ 
      subscriber: res.subscriber,
      message: 'Subscriber deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getSubscriber(req, res, next) {
  try {
    let subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: 'Subscriber not found.' });
    }
    res.subscriber = subscriber;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = router;