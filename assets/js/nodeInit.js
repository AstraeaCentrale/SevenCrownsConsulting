// Express + MongoDB Atlas API server
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const uri = 'YOUR_MONGODB_ATLAS_URI'; // Replace with your Atlas connection string
const client = new MongoClient(uri);

let db;

async function connectDB() {
	try {
		await client.connect();
		db = client.db('YOUR_DATABASE_NAME'); // Replace with your DB name
		console.log('Connected to MongoDB Atlas');
	} catch (err) {
		console.error('MongoDB connection error:', err);
	}
}

connectDB();

// Example GET endpoint
app.get('/api/users', async (req, res) => {
	try {
		const users = await db.collection('users').find().toArray();
		res.json(users);
	} catch (err) {
		res.status(500).json({ error: 'Failed to fetch users' });
	}
});

// Example POST endpoint
app.post('/api/users', async (req, res) => {
	try {
		const result = await db.collection('users').insertOne(req.body);
		res.json({ insertedId: result.insertedId });
	} catch (err) {
		res.status(500).json({ error: 'Failed to add user' });
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
