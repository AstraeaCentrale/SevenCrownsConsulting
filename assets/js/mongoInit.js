let mongoose = require("mongoose"),
  connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log(`MongoDB connected`);
    } catch (error) {
      console.log(`Connect failed: ${error.message}`);
    }
  };

module.exports = connectDB;