// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://database:27017/mydatabase';

// --- MongoDB Connection ---
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// --- Mongoose Schema and Model ---
const MessageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});
const Message = mongoose.model('Message', MessageSchema);

// --- API Routes ---
app.get('/api/messages', async (req, res) => {
    const messages = await Message.find().sort({ timestamp: -1 });
    res.json(messages);
});

app.post('/api/messages', async (req, res) => {
    const newMessage = new Message({
        text: req.body.text
    });
    const savedMessage = await newMessage.save();
    res.json(savedMessage);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
