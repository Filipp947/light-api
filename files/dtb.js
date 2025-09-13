export default function handler(req,res){
  let num=Number(req.query.q);
  if(isNaN(num)) return res.status(400).json({error:"invalid number"});
  res.status(200).json({binary:num.toString(2)});
}
