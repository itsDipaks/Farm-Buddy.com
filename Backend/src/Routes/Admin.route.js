const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const {AdminModel} = require("../Modles/Admin.modles")
const adminRouter = express.Router()


// Admin Signup Method Here

adminRouter.post("/signup",async(req,res)=>{
    const {email,password,firstname,lastname,role,avtar}= req.body
    try{
        let existingUser = await AdminModel.findOne({email})
        if(existingUser){
            res.status(404).send({"msg":"Admin already exists Please Login"})
        }else{
            bcrypt.hash(password,4, async(err,hash)=>{
        let admin = new AdminModel({email,password:hash,firstname,lastname,role,avtar})
                await admin.save()
                res.status(200).send({"msg":`${firstname} Sign Up Successfull`})
            })
        }
    }
    catch(err){
        console.log(err)
        res.status(404).send({"msg":"Something Went wrong"})
    }
})



// Admin Login Method Here

adminRouter.post("/login",async(req,res)=>{
    const {email,password}= req.body
    try{
        let admin = await AdminModel.find({email})
        if(admin.length>0){
            const hashed_password = admin[0].password
            bcrypt.compare(password,hashed_password,function(err,result){
                if(result){
                    const token = jwt.sign({"adminID":admin[0]._id},'ravi')
                    res.status(200).send({"msg":"Login success ","token":token})
                }else{
                    res.status(400).send({"msg":"Login Failed"})
                }
            })
        }
        else{
            res.status(400).send({"msg":"Login Failed"})
        }
    }
    catch(err){
        console.log(err)
        res.status(404).send({"msg":"Something Went wrong"})
    }
})

module.exports={
    adminRouter
}