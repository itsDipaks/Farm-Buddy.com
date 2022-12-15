const jwt = require("jsonwebtoken")
require("dotenv").config()
const UserAuthenticate = (req,res,next)=>{
    const token = req.headers?.token
    if(token){
        const decoded = jwt.verify(token,process.env.PRIVATEKEY)
        if(decoded){
            const user_id  = decoded.user_id
            req.body.user_id = user_id
            next()
        }
        else{
            res.send("Please Login again")
        }
    }
    else{
        res.send('Please Login token not found')
    }
}
module.exports={
    UserAuthenticate
}