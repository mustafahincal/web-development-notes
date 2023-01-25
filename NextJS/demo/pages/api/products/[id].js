import data from "@/pages/_data";

export default function handler(req, res) {
  const product = data.filter((product) => product.id == req.query.id);
  if (product.length > 0) res.status(200).json(product);
  else res.status(400).json({ message: "product not found" });
}
