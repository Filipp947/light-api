export default function handler(req,res){
  const text=req.query.q;
  if(!text) return res.status(400).json({error:"query parameter 'q' missing"});
  try {
    const decoded=Buffer.from(text,'base64').toString('utf8');
    res.status(200).json({decoded});
  } catch {
    res.status(400).json({error:"invalid base64"});
  }
}
