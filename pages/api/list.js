import client from "@/lib/mongodb";

export default async function handler(request, response) {
  try {
    const mongoClient = await client.connect(),
      db = mongoClient.db("sample_restaurants"),
      collection = db.collection("restaurants"),
      results = await collection
        .find({})
        .project({
          grades: 0,
          borough: 0,
          restaurant_id: 0,
        })
        .limit(9)
        .toArray();
    response.status(200).json(results);
  } catch (e) {
    console.error(e);
    response.status(500).json(e);
  }
}