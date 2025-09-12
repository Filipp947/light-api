export default function handler(req,res){
  const text=req.query.q||"";
  const words=text.trim().split(/\s+/).filter(Boolean).length;
  const chars=text.length;
  res.status(200).json({words,chars});
}
