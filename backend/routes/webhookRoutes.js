const express = require('express');
const router = express.Router();
const { processPayload, getConversations, sendMessage } = require('../controllers/webhookController');

router.post('/webhook', processPayload);
router.get('/messages', getConversations);
router.post('/send', sendMessage);

module.exports = router;
