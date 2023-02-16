import { posts } from "../../../../_data";
export default function handler(req, res) {
  const post = posts.find((post) => post.id == req.query.id);
  if (post) res.status(200).json(post);
  else res.status(400).json({ message: "not found" });
}
