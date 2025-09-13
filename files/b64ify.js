export default function handler(req,res){
  const text=req.query.q;
  if(!text) return res.status(400).json({error:"query parameter 'q' missing"});
  res.status(200).json({base64:Buffer.from(text).toString('base64')});
}
