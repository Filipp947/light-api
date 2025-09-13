export default function handler(req, res) {
  const n = Number(req.query.q);
  const total = Number(req.query.total);
  if(isNaN(n)||isNaN(total)||total===0) return res.status(400).json({ error:"invalid q or total" });
  res.status(200).json({ result: (n/total*100).toFixed(2)+"%" });
}
