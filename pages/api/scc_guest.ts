import type { NextApiRequest, NextApiResponse } from "next";
import client from "@/lib/mongodb";
import { BSON } from "mongodb";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const mongoClient = await client.connect();
    const db = mongoClient.db("scc_data");
    const collection = db.collection("scc_guest");

    if (request.method === "POST") {
      // Insert a new guest document
      const guestData = request.body;
      const result = await collection.insertOne(guestData);
      response
        .status(201)
        .json({ insertedId: result.insertedId, ...guestData });
    } else if (request.method === "GET") {
      const { guid } = request.query;
      if (typeof guid === "string" && guid) {
        // Search by _id (ObjectId or string)
        let query: Record<string, any> = {};
        if (guid.length === 24) {
          query._id = new BSON.ObjectId(guid);
        } else {
          query._id = guid;
        }
        const result = await collection.findOne(query);
        if (result) {
          response.status(200).json(result);
        } else {
          response.status(404).json({ error: "Guest not found" });
        }
      } else {
        // List all guest documents
        const results = await collection.find({}).toArray();
        response.status(200).json(results);
      }
    } else if (request.method === "DELETE") {
      const { guid } = request.query;
      if (typeof guid === "string" && guid) {
        let query: Record<string, any> = {};
        if (guid.length === 24) {
          query._id = new BSON.ObjectId(guid);
        } else {
          query._id = guid;
        }
        const result = await collection.deleteOne(query);
        if (result.deletedCount === 1) {
          response.status(200).json({ message: "Guest deleted" });
        } else {
          response.status(404).json({ error: "Guest not found" });
        }
      } else {
        response.status(400).json({ error: "GUID required for delete" });
      }
    } else {
      response.status(405).json({ error: "Method not allowed" });
    }
  } catch (e) {
    console.error(e);
    const errorMsg = e instanceof Error ? e.message : String(e);
    response.status(500).json({ error: errorMsg });
  }
}
