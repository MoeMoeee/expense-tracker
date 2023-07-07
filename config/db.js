const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);

        console.log(`DB connected: ${connection.connection.host}`.yellow);

    } 
    catch (error) {
        console.log(`Error: ${error.message}`.red);
        process.exit(1);
    }

}

module.exports = connectDB;