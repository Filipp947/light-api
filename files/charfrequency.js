export default function handler(req, res) {
  const q = req.query.q;
  if(!q) return res.status(400).json({ error:"q missing" });
  const freq = {};
  q.split('').forEach(c=>freq[c]=(freq[c]||0)+1);
  res.status(200).json({ result: freq });
}
