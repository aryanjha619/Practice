const {Router} = require('express');
const router = Router();
const path = require('path');
const upload = require('multer');
const useModel = require('../Model/userModel');

router.post('/create-user',async(req,res)=>{
    const {name,email,password} = req.body;
    const userEmail = await useModel.findOne({email});
    if (userEmail){
        res.status(400).json({message:"User already exist",err});
    }
    //const filename = req.file.filename;
    //const fileurl = path.json(_dirname + filename);

    const user = {
        name:name,
        email:email,
        password:password,
        //avatar :fileurl,
    }
    console.log(user);
    useModel.create(user);
    res.status(200).json({message:"User created successful"});
})
module.exports = router;