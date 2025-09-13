export default function handler(req,res){
  const bin=req.query.q;
  if(!/^[01]+$/.test(bin)) return res.status(400).json({error:"invalid binary"});
  res.status(200).json({decimal:parseInt(bin,2)});
}
