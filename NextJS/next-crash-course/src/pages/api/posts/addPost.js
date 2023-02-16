import data from "../../_data";
export default function handler(req, res) {
  data.push({ ...req.body, id: data.length + 1 });
  res.status(200).json(req.body);
}
