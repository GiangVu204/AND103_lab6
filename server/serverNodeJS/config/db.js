const mongoose = require('mongoose');

const local = "mongodb+srv://giangvu04:2042044@cluster0.nceaine.mongodb.net/MyDatabase";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
