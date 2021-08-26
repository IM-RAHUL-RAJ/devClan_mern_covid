const express=require('express');

const router=express.Router();
require('../db/conn');
const User=require('../model/userSchema');
router.get('/',(req,res)=>{
    res.send("hello from router");
})

router.post('/register',(req,res)=>{

    const details={
        name:'Rahul',
        email:'rahul@gmail.com',
        phone:'3209584181',
        password:'rahul',
        cpassword:'rahul'
    };
    const {name,email,phone,password,cpassword}=details;

    if(!name || !email || !phone || !password || !cpassword){
        return res.status(422).json("plz fill all fields");
    }

    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"email already exist"})
        }
        const user=new User({name,email,phone,password,cpassword});
        user.save().then(()=>{
            console.log("updated");
            res.status(201).send("registered");
        }).catch((err)=>{
            console.log("failed");
        })
    }).catch(err=>{ console.log(err)});
});

module.exports = router;