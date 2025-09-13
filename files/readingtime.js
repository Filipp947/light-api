export default function handler(req, res) {
  const q = req.query.q;
  if(!q) return res.status(400).json({ error:"q missing" });
  const words = q.trim().split(/\s+/).length;
  const result = (words/200).toFixed(2); // 200 wpm
  res.status(200).json({ result: result + " min" });
}
