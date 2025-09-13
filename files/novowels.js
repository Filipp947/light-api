export default function handler(req, res) {
  const q = req.query.q;
  if (!q) return res.status(400).json({ error: "query parameter 'q' missing" });
  const result = q.replace(/[aeiouAEIOU]/g, '');
  res.status(200).json({ result });
}
