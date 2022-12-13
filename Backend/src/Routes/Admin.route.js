const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const {AdminModel} = require("../Modles/Admin.modles")
const adminRouter = express.Router()
const {Adminauthenticate}= require("../middelwares/AdminAutenticate")


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



//          Rough work don't delete

// const Adminauthenticate = (req,res,next)=>{
//     const token = req.headers?.authorization?.split(" ")[1]
//     if(token){
//         const decoded = jwt.verify(token,'ravi')
//         if(decoded){
//             const adminID  = decoded.adminID
//             req.body.adminID = adminID
//             next()
//         }
//         else{
//             res.send("Please Login ")
//         }
//     }
//     else{
//         res.send('Please Login')
//     }
// }


//     Admin Profile get Method

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

//    Admin Profile update method

adminRouter.patch("/adminUpdate",Adminauthenticate,async(req,res)=>{
    const adminID = req.body.adminID
    console.log(req.body)
    try{
        const updateAdmin = await AdminModel.findByIdAndUpdate({_id:adminID},req.body)
        res.status(200).send({'msg':"Profile Updated"})
    }
    catch(err){
        console.log(err)
        res.status(200).send({'err':"Something went wrong"})
    }
})

module.exports={
    adminRouter
}