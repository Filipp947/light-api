export default function handler(req, res) {
  const n = Number(req.query.q);
  if (!req.query.q || isNaN(n)) return res.status(400).json({ error: "query parameter 'q' missing or invalid" });
  const result = n <= 1 ? 1 : Array.from({length:n},(_,i)=>i+1).reduce((a,b)=>a*b,1);
  res.status(200).json({ result });
}
