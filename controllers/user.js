const{v4:uuidv4}=require('uuid');
const {User}=require('../models/user');
const{setUser}=require('../services/auth');

async function handleCreateUser(req,res){
    const {name, email, password}=req.body;
    try{
        await User.create({
            name,
            email,
            password
        });
        return res.status(201).render("response",{
            message: "user created successfully, please login"
        })
    }catch(err){
        console.log("error in handleCreateUser: "+err);
        return res.status(500).render("response",{
            message: "failed to signup, try different email"
        })
    }
}
async function handleUserLogin (req,res){
    const { email, password}=req.body;
    try{
        const result = await User.findOne({email,password})
        // console.log(result);
        if(!result){
            return res.status(404).render("response",{
                message: "invalid email/password, please try again"
            })
        }
        const sessionId=uuidv4();
        res.cookie('uid',sessionId);
        setUser(sessionId,result);
        return res.status(200).redirect('/');
    }catch(err){
        console.log("error in login: "+err);
        return res.status(500).render("response",{
            message: "server error"
        })
    }
}

module.exports={
    handleCreateUser,
    handleUserLogin,
}