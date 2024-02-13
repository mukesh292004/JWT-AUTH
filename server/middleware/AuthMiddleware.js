const jwt = require('jsonwebtoken');
const Auth = require('../model/Authmodel');


const AuthMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    
    
   if(!authorization){
    return res.status(401).json({error:'Authorization token required'})
   }
   const token =authorization.split(' ')[1]
   
   try {
    const {_id} = jwt.verify(token, 'your_secret_key_here');
    
    const user = await Auth.findOne({ _id }).select('_id');
    
    req.user = user;
  next()
   
    
   } catch (error) {
    
    res.status(401).json({error:"Request is not Authorized"})
   }
   

}
module.exports = AuthMiddleware;
