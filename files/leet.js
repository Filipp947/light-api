export default function handler(req, res) {
  const text = req.query.q;
  if(!text) return res.status(400).json({error:"query parameter 'q' missing"});
  
  const map = {a:'4',b:'8',e:'3',g:'6',i:'1',l:'1',o:'0',s:'5',t:'7',z:'2'};
  const leet = text.toLowerCase().split('').map(c => map[c] || c).join('');
  
  res.status(200).json({leet});
}
