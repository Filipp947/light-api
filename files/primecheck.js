export default function handler(req, res) {
  const n = Number(req.query.q);
  if (!req.query.q || isNaN(n) || n<2) return res.status(400).json({ error: "query parameter 'q' missing or invalid" });
  let isPrime = true;
  for(let i=2;i*i<=n;i++) if(n%i===0) { isPrime=false; break; }
  res.status(200).json({ result: isPrime });
}
