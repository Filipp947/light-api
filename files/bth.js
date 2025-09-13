export default function handler(req, res) {
  const q = req.query.q;
  if (!q || !/^[01]+$/.test(q)) return res.status(400).json({ error: "query parameter 'q' missing or invalid" });
  res.status(200).json({ result: parseInt(q,2).toString(16) });
}
