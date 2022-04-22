const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            // withCredentials: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // native_parser: true
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB