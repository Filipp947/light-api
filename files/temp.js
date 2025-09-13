export default function handler(req, res) {
  const n = Number(req.query.q);
  const type = (req.query.type||"c").toLowerCase();
  if (!req.query.q || isNaN(n)) return res.status(400).json({ error: "query parameter 'q' missing or invalid" });
  let result;
  if(type==="c") result = n*9/5+32;       // C→F
  else if(type==="f") result = (n-32)*5/9;// F→C
  else if(type==="k") result = n+273.15;   // C→K
  else return res.status(400).json({ error:"invalid type" });
  res.status(200).json({ result });
}
