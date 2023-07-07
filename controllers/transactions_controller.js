// intereact with db

// get transactions to route /api/v1/transactions
exports.getTransactions = (req, res, next) => {
    res.send('GET transaction');
}

// delete transactions to route /api/v1/transactions/:id
exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE transaction');
}

// post transactions to route /api/v1/transactions
exports.addTransactions = (req, res, next) => {
    res.send('POST transaction');
}