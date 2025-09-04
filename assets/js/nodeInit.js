let express = require("express"),
  app = express(),
  connectDB = require("./mongoInit");

require("dotenv").config();
app.use(express.json());
connectDB();

// let BookModel = require("./models/book.model");
// let redis = require("./redis");

// let deleteKeys = async (pattern) => {
//   let keys = await redis.keys(`${pattern}::*`);
//   console.log(keys);
//   if (keys.length > 0) {
//     redis.del(keys);
//   }
// };

// app.get("/api/v1/books", async (req, res) => {
//   let { limit = 5, orderBy = "name", sortBy = "asc", keyword } = req.query;
//   let page = +req.query?.page;

//   if (!page || page <= 0) page = 1;

//   let skip = (page - 1) * +limit;

//   let query = {};

//   if (keyword) query.name = { $regex: keyword, $options: "i" };

//   let key = `Book::${JSON.stringify({
//     query,
//     page,
//     limit,
//     orderBy,
//     sortBy,
//   })}`;
//   let response = null;
//   try {
//     let cache = await redis.get(key);
//     if (cache) {
//       response = JSON.parse(cache);
//     } else {
//       let data = await BookModel.find(query)
//         .skip(skip)
//         .limit(limit)
//         .sort({ [orderBy]: sortBy });
//       let totalItems = await BookModel.countDocuments(query);

//       response = {
//         msg: "Ok",
//         data,
//         totalItems,
//         totalPages: Math.ceil(totalItems / limit),
//         limit: +limit,
//         currentPage: page,
//       };

//       redis.setex(key, 600, JSON.stringify(response));
//     }

//     return res.status(200).json(response);
//   } catch (error) {
//     return res.status(500).json({
//       msg: error.message,
//     });
//   }
// });

// app.get("/api/v1/books/:id", async (req, res) => {
//   try {
//     let data = await BookModel.findById(req.params.id);

//     if (data) {
//       return res.status(200).json({
//         msg: "Ok",
//         data,
//       });
//     }

//     return res.status(404).json({
//       msg: "Not Found",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       msg: error.message,
//     });
//   }
// });

// app.post("/api/v1/books", async (req, res) => {
//   try {
//     let { name, author, price, description } = req.body;
//     let book = new BookModel({
//       name,
//       author,
//       price,
//       description,
//     });
//     let data = await book.save();
//     deleteKeys("Book");
//     return res.status(200).json({
//       msg: "Ok",
//       data,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       msg: error.message,
//     });
//   }
// });

// app.put("/api/v1/books/:id", async (req, res) => {
//   try {
//     let { name, author, price, description } = req.body;
//     let { id } = req.params;

//     let data = await BookModel.findByIdAndUpdate(
//       id,
//       {
//         name,
//         author,
//         price,
//         description,
//       },
//       { new: true }
//     );
//     deleteKeys("Book");
//     return res.status(200).json({
//       msg: "Ok",
//       data,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       msg: error.message,
//     });
//   }
// });

// app.delete("/api/v1/books/:id", async (req, res) => {
//   try {
//     await BookModel.findByIdAndDelete(req.params.id);
//     deleteKeys("Book");
//     return res.status(200).json({
//       msg: "Ok",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       msg: error.message,
//     });
//   }
// });

// let PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log("Server is running on port " + PORT);
// });