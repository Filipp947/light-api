export default function handler(req, res) {
  const q = req.query.q;
  if(!q) return res.status(400).json({ error:"q missing" });
  const words = q.toLowerCase().match(/\b\w+\b/g);
  if(!words) return res.status(200).json({ result:null });
  const freq = {};
  words.forEach(w=>freq[w]=(freq[w]||0)+1);
  const max = Math.max(...Object.values(freq));
  const result = Object.keys(freq).filter(k=>freq[k]===max);
  res.status(200).json({ result });
}
