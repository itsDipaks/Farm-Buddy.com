const express=require("express")
const cors=require("cors")

const { connection } = require("./src/Config/db")
const { adminRouter } = require("./src/Routes/Admin.route")
const { UserAuthRouter } = require("./src/Routes/UserAuth.route")
const { ProductRouter } = require("./src/Routes/Product.route")
const app=express()

app.use(cors())
app.use(express.json())

// app.use("/",(req,res)=>{
//     res.status(200).send("Welcome To PharmBuddy API")
// })


app.use("/userauth",UserAuthRouter)

app.use('/',adminRouter)

app.use("/product",ProductRouter)
// app.use('/',adminRouter)

app.listen(8400,async()=>{
try{
    await connection
    console.log("Server Connected With DataBase")
    console.log("Server Started At http://localhost:8400")
}catch(err){
console.log("Somethning Wents Wrong",err)
}
})