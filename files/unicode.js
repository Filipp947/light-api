export default function handler(req,res){
  const text=req.query.q;
  if(!text) return res.status(400).json({error:"query parameter 'q' missing"});
  
  const offset=0x1D400-65; // A-Z to bold unicode
  const unicode=text.split('').map(c=>{
    const code=c.charCodeAt(0);
    if(code>=65&&code<=90) return String.fromCodePoint(code+offset);
    if(code>=97&&code<=122) return String.fromCodePoint(code-97+0x1D41A); // a-z
    return c;
  }).join('');

  res.status(200).json({unicode});
}
