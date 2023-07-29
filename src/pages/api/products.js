import connectToDB from "./mongodb";

export default async function handler(req, res) {
  try {
    const client = await connectToDB();
    const db = client.db();

    const category = req.query.category;
    const producdtsCollection = db.collection("products");

    if (req.method === "GET") {
      const motherboard = await producdtsCollection
        .find({ category })
        .toArray();
      res.send({
        status: "200",
        message: `success get ${category} product`,
        data: motherboard,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
