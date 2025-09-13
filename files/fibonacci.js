export default function handler(req, res) {
  const n = Number(req.query.q);
  if (!req.query.q || isNaN(n) || n<0) return res.status(400).json({ error: "query parameter 'q' missing or invalid" });
  const fib = [0,1];
  for(let i=2;i<=n;i++) fib[i]=fib[i-1]+fib[i-2];
  res.status(200).json({ result: fib[n] });
}
