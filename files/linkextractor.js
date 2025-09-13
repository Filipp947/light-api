export default function handler(req, res) {
  const q = req.query.q;
  if(!q) return res.status(400).json({ error:"q missing" });
  const links = q.match(/https?:\/\/[^\s]+/g) || [];
  res.status(200).json({ result: links });
}
