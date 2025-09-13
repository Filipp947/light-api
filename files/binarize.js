export default function handler(req, res) {
  const q = req.query.q;
  if (!q) return res.status(400).json({ error: "query parameter 'q' missing" });
  const result = q.split('').map(c => '0'.repeat(8 - c.charCodeAt(0).toString(2).length) + c.charCodeAt(0).toString(2)).join(' ');
  res.status(200).json({ result });
}
