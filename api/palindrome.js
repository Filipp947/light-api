export default function handler(req,res){
  const text=(req.query.q||"").replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  const isPalindrome=text===text.split('').reverse().join('');
  res.status(200).json({palindrome:isPalindrome});
}
