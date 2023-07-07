// intereact with db

const Transaction = require('../models/Transaction');

// get transactions to route /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (error) {
        return res.status(500).json({
            success: false
        });
    }
}

// delete transactions to route /api/v1/transactions/:id
exports.deleteTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if (transaction !== null) {
            await transaction.deleteOne();
            return res.status(200).json({
                success: true,
                id: req.params.id
            });
        }

        return res.status(404).json({
            success: false,
            error: "Can't find transaction"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
}

// post transactions to route /api/v1/transactions
exports.addTransactions = async (req, res, next) => {
    try {
        const {text, amount} = req.body;

        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (error) {
        if(error.name === 'ValidationError'){
            const message = Object.values(error.errors).map(err => err.message);

            return res.status(400).json({
                success: false,
                error: message
            }); //client error
        }

        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }


}