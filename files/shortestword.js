export default function handler(req, res) {
  const q = req.query.q;
  if(!q) return res.status(400).json({ error:"q missing" });
  const words = q.match(/\b\w+\b/g) || [];
  if(!words.length) return res.status(200).json({ result:null });
  const result = words.reduce((a,b)=>b.length<a.length?b:a,words[0]);
  res.status(200).json({ result });
}
