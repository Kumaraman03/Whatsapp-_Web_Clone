const Message = require('../models/Message');

// Process incoming payloads (Insert or Update status)
exports.processPayload = async (req, res) => {
  try {
    const payload = req.body;

    if (payload.type === 'message') {
      // Insert new message
      const newMsg = new Message({
        wa_id: payload.wa_id,
        name: payload.name,
        message: payload.message,
        timestamp: new Date(payload.timestamp),
        meta_msg_id: payload.meta_msg_id
      });
      await newMsg.save();
    } else if (payload.type === 'status') {
      // Update message status
      await Message.findOneAndUpdate(
        { meta_msg_id: payload.meta_msg_id },
        { status: payload.status }
      );
    }

    res.status(200).json({ message: 'Payload processed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch all conversations
exports.getConversations = async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Send message (store only)
exports.sendMessage = async (req, res) => {
  try {
    const { wa_id, name, message } = req.body;
    const newMsg = new Message({
      wa_id,
      name,
      message,
      timestamp: new Date(),
      status: 'sent'
    });
    await newMsg.save();
    res.status(201).json(newMsg);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
