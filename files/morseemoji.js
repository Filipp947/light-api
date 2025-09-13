export default function handler(req, res) {
  const q = req.query.q;
  if (!q) return res.status(400).json({ error: "query parameter 'q' missing" });
  const morse = {a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",
    k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",
    w:".--",x:"-..-",y:"-.--",z:"--..",0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",
    6:"-....",7:"--...",8:"---..",9:"----."};
  const result = q.toLowerCase().split('').map(c => morse[c] ? morse[c].replace(/\./,'✨').replace(/-/,'🌙') : (c===' '?' / ':'')).join(' ');
  res.status(200).json({ result });
}
