export default function handler(req, res) {
  const min = Number(req.query.min || 0);
  const max = Number(req.query.max || 100);
  if(isNaN(min)||isNaN(max)||min>max) return res.status(400).json({ error:"invalid min/max" });
  const result = Math.floor(Math.random()*(max-min+1))+min;
  res.status(200).json({ result });
}
