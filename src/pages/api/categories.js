import connectToDB from "./mongodb";

export default async function categoriesHandler(req, res) {
  try {
    const client = await connectToDB();
    const db = client.db();

    const categoriesCollection = db.collection("categories");

    if (req.method === "GET") {
      const categories = await categoriesCollection.find({}).toArray();
      res.send({
        status: "200",
        message: `Successfully retrived categories`,
        data: categories,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
