const express = require('express');
const router = express.Router();
const {getTransactions} = require('../controllers/transactions_controller');

route.route('/').get(getTransactions);

module.exports = router;