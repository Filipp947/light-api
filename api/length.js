export default function handler(req,res){
  const text=req.query.q||"";
  res.status(200).json({length:text.length});
}
