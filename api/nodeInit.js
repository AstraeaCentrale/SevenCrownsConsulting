const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    const db = client.db('senrimana');
    // Use db for queries
    return db;
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

// Example usage: connect to DB and log success
connectDB().then(db => {
  if (db) {
    console.log('Connected to MongoDB and ready to use the database.');
  }
}).catch(err => {
  console.error('Failed to connect to MongoDB:', err);
});