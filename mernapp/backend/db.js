const mongoose = require('mongoose');

const mongoDB = async () => {
  try {
    await mongoose.connect('Database url', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Access the database and collections
    const db = mongoose.connection.db;

    // Fetch foodData
    const foodData = await db.collection("foodData").find({}).toArray();
    global.foodData = foodData;

    // Fetch foodCategory
    const foodcategory = await db.collection("foodcategory").find({}).toArray();

    // Assign the data to global variables
    global.foodcategory = foodcategory;

    // Log the data
    console.log(global.foodData);
    console.log(global.foodcategory);

  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
  }
};

module.exports = mongoDB;


