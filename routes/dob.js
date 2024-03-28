const express= require('express');
const {handleCreateEntry,handleDeleteEntry}=require('../controllers/home');
const router = express.Router();

router.post('/',handleCreateEntry);
router.get('/:id',handleDeleteEntry);

module.exports=router;