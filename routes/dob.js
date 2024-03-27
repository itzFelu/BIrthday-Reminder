const express= require('express');
const {handleCreateEntry}=require('../controllers/home');
const router = express.Router();

router.post('/',handleCreateEntry);

module.exports=router;