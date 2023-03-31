const mongoose = require('mongoose');

const ConnectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Application is connected with host: ${connect.connection.host}`
    );
  } catch (error) {
    console.log(`Error connecting database : ${error.message} `);
    process.exit(1);
  }
};

module.exports = ConnectDb;
