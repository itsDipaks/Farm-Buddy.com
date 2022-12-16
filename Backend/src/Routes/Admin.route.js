const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const {AdminModel} = require("../Modles/Admin.modles")
const adminRouter = express.Router()
const {Adminauthenticate}= require("../middelwares/AdminAutenticate")
const { UserModel } = require("../Modles/Users.model")


  //.................... Admin Signup Method .....................//

adminRouter.post("/adminsignup",async(req,res)=>{
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



  //.................... Admin Login Method .....................//

adminRouter.post("/adminlogin",async(req,res)=>{
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

  //.................... Admin Profile Get Method .....................//

adminRouter.get("/adminDetails",Adminauthenticate,async(req,res)=>{
         const adminID = req.body.adminID
    try{
        const admin = await AdminModel.find({_id:adminID})
        res.status(200).send({"msg":"Admin Details Are","Data":admin})
    }
    catch(err){
        console.log(err)
        res.status(200).send({'err':"Something went wrong"})
    }
})

  //.................... Admin Profile Update Method .....................//

adminRouter.patch("/adminUpdate",Adminauthenticate,async(req,res)=>{
    const adminID = req.body.adminID
    try{
        const updateAdmin = await AdminModel.findByIdAndUpdate({_id:adminID},req.body)
        res.status(200).send({'msg':"Profile Updated"})
    }
    catch(err){
        console.log(err)
        res.status(200).send({'err':"Something went wrong"})
    }
})


  //.................... All Admins Get Method .....................//

adminRouter.get('/alladmins',async(req,res)=>{
    try{
      const admins =  await AdminModel.find()
      res.status(200).send({"msg":"All Admins Data","Data":admins})
    }
    catch(err){
        console.log(err)
        res.status(200).send({'err':"Something went wrong"})
    }
})






  //.................... All Users Get Method .....................//

adminRouter.get("/allusers",async(req,res)=>{
    try{
        const users = await UserModel.find()
        res.status(200).send({"msg":"All Users Data","Data":users})
    }
    catch(err){
        console.log(err)
        res.status(200).send({'err':"Something went wrong"})
    }
})


  //....................  Users Delete Method .....................//

adminRouter.delete('/deleteuser/:userID',async(req,res)=>{
        const userID = req.params.userID
    try{
        await UserModel.findByIdAndDelete({_id:userID})
        res.status(200).send({"msg":"User Delete Successfully"})
    }
    catch(err){
        console.log(err)
        res.status(200).send({'err':"Something went wrong"})
    }
})




module.exports={
    adminRouter
}