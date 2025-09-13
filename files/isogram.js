export default function handler(req, res) {
  const q = req.query.q;
  if(!q) return res.status(400).json({ error:"q missing" });
  const chars = q.toLowerCase().replace(/[^a-z]/g,'').split('');
  const result = new Set(chars).size === chars.length;
  res.status(200).json({ result });
}
