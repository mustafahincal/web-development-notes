import data from "../../_data";
export default function handler(req, res) {
  res.status(200).json(data);
}
