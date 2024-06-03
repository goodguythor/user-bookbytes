const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.url;

const connectToDB = async () => {
  try {
    const res = await mongoose.connect(url, {});
    if (res) {
      console.log('connected to MongoDB');
    }
  } catch (error) {
    console.log('error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectToDB;