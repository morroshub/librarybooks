/// path /// mongod --dbpath ~/Documents/Code-project/jsfulls/db

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
});


mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
  
mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
