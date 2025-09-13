export default function handler(req,res){
  const text=req.query.q;
  if(!text) return res.status(400).json({error:"query parameter 'q' missing"});

  let uwu=text
    .replace(/r|l/g,'w')
    .replace(/R|L/g,'W')
    .replace(/n([aeiou])/g,'ny$1')
    .replace(/N([aeiou])/g,'Ny$1')
    .replace(/N([AEIOU])/g,'NY$1');

  res.status(200).json({uwu:uwu});
}
