import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI,
  options = {};

let mongoClient;

if (!process.env.MONGODB_URI) { throw new Error("Please add your Mongo URI to .env.local"); }

export async function connectToDatabase() {
  try {
    if (mongoClient) { return { mongoClient }; }
    mongoClient = await (new MongoClient(uri, options)).connect();
    console.log("Database connected (from /lib)");
    return { mongoClient };
  } catch (e) {
    console.error(e);
  }
}

// export default async function handler(request, response) {
//   try {
//     const mongoClient = await new MongoClient(uri, options).connect(),
//       db = mongoClient.db("sample_restaurants"),
//       collection = db.collection("restaurants"),
//       results = await collection
//         .find({})
//         .project({
//           grades: 0,
//           borough: 0,
//           restaurant_id: 0,
//         })
//         .limit(4)
//         .toArray();
//     console.log("Database connected");
//     response.status(200).json(results);
//   } catch (e) {
//     console.error(e);
//     response.status(500).json(e);
//   }
// }