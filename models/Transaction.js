const mongoose = require('mongoose');

const TransSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Transaction = mongoose.model('Transaction', TransSchema);

module.exports = Transaction;