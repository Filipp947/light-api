export default function handler(req, res) {
  let a = Number(req.query.a), b = Number(req.query.b);
  if(isNaN(a)||isNaN(b)) return res.status(400).json({ error:"invalid a or b" });
  const gcd = (x,y)=>y===0?x:gcd(y,x%y);
  const resultGCD = gcd(a,b);
  const resultLCM = (a*b)/resultGCD;
  res.status(200).json({ gcd: resultGCD, lcm: resultLCM });
}
