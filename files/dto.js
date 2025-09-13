export default function handler(req, res) {
  const n = Number(req.query.q);
  if (!req.query.q || isNaN(n)) return res.status(400).json({ error: "query parameter 'q' missing or invalid" });
  res.status(200).json({ result: n.toString(8) });
}
