export default function handler(req,res){
  let num=Number(req.query.q);
  if(!num || num<=0) return res.status(400).json({error:"invalid number"});
  const val=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const sym=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let roman="",i=0;
  while(num>0){if(num>=val[i]){num-=val[i];roman+=sym[i];}else i++;}
  res.status(200).json({roman});
}
