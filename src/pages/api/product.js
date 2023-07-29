import { ObjectId } from "mongodb";
import connectToDB from "./mongodb";

export default async function handler(req, res) {
  try {
    const client = await connectToDB();
    const db = client.db();

    const productCollection = db.collection("products");

    const productId = req.query.id;
    console.log(" productId ", productId);

    if (req.method === "GET") {
      const product = await productCollection.findOne({
        _id: ObjectId(productId),
      });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.send({
        status: "200",
        message: `Successfully retrived product`,
        data: product,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
