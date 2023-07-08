const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'})

connectDB();

const app = express();
const transactions = require('./route/transaction')


app.use(express.json());

app.use('/api/v1/transactions', transactions)

app.get('/', (req, res) => res.send("LALA"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Running on port ${PORT}`.blue.bold))



