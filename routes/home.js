const { handleHome, handleLogout}=require('../controllers/home');
const{ handleCreateUser, handleUserLogin }=require('../controllers/user');
const express= require('express');
const router = express.Router();

router.get('/',handleHome)
router.get('/logout',handleLogout)
router.post('/signup',handleCreateUser);
router.post('/login',handleUserLogin);
router.get('/signup',(req,res)=> res.render("signup"));
router.get('/login',(req,res)=> res.render("login"));


module.exports=router;