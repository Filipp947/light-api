export default function handler(req,res){
  const text=req.query.q;
  if(!text) return res.status(400).json({error:"query parameter 'q' missing"});
  const hex=Buffer.from(text).toString('hex');
  res.status(200).json({hex});
}
