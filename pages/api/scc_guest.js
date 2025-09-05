import client from "@/lib/mongodb";

export default async function handler(request, response) {
  try {
    const mongoClient = await client.connect(),
      db = mongoClient.db("scc_data"),
      collection = db.collection("scc_guest"),
      results = await collection
        .find({})
        .toArray();
    response.status(200).json(results);
  } catch (e) {
    console.error(e);
    response.status(500).json(e);
  }
}