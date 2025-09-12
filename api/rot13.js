export default function handler(req,res){
  const text=req.query.q;
  if(!text) return res.status(400).json({error:"query parameter 'q' missing"});

  const rot13 = text.replace(/[a-zA-Z]/g, c =>
    String.fromCharCode(
      (c<='Z'?90:122) >= (c=c.charCodeAt(0)+13)? c : c-26
    )
  );
  res.status(200).json({rot13});
}
