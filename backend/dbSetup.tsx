const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = async () => {
    dotenv.config();
    let MONGO_URL = process.env.MONGO_URL||"";
  try {
    const conn = await mongoose.connect(MONGO_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;
