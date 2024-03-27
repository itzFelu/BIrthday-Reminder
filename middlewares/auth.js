const{getUser}=require('../services/auth');
function restrictToLoggedInUserOnly(req, res, next){
    const userId=req.cookies?.uid;
    // console.log(req.cookies);
    // console.log("userId"+userId);
    if(!userId) return res.redirect('/login');
    const user=getUser(userId);
    // console.log(user);
    if(!user) return res.redirect('/login');
    req.user=user;
    
    next();
}

function checkAuth(req, res, next){
    const userId=req.cookies?.uid;
    if(!userId){
        next();
        return;
    } 
    const user=getUser(userId);
    if(user) {
        // console.log(req.user);
        req.user=user; 
    }
        
    next();
}
module.exports={
    restrictToLoggedInUserOnly,
    checkAuth,
}