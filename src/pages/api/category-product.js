// import { ObjectId } from "mongodb";
// import connectToDB from "./mongodb";

// export default async function productHandler(req, res) {
//   try {
//     const client = await connectToDB();
//     const db = client.db();

//     const productCollection = db.collection("products");

//     const productId = req.query.id;
//     console.log(" productId ", productId);

//     if (req.method === "GET") {
//       const product = await productCollection.findOne({
//         _id: ObjectId(productId),
//       });

//       console.log("product", product);

//       if (!product) {
//         return res.status(404).json({ message: "Product not found" });
//       }

//       res.send({
//         status: "200",
//         message: `Successfully retrived product`,
//         data: product,
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// }

import { ObjectId } from "mongodb";
import connectToDB from "./mongodb";

export default async function productHandler(req, res) {
  try {
    // Validate that the request method is "GET"
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    // Validate that productId is provided in the query string
    const productId = req.query.id;
    if (!productId) {
      return res
        .status(400)
        .json({ message: "productId parameter is missing" });
    }

    // Convert productId to ObjectId for the query
    let productObjectId;
    try {
      productObjectId = new ObjectId(productId);
    } catch (error) {
      return res.status(400).json({ message: "Invalid productId format" });
    }

    const client = await connectToDB();
    const db = client.db();

    const productCollection = db.collection("products");

    const product = await productCollection.findOne({
      _id: productObjectId,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      status: "success",
      message: "Successfully retrieved product",
      data: product,
    });
  } catch (error) {
    console.error("Error retrieving product:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
