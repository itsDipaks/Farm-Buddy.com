const express=require("express")
const cors=require("cors")

const { connection } = require("./src/Config/db")
const { adminRouter } = require("./src/Routes/Admin.route")
const { UserAuthRouter } = require("./src/Routes/UserAuth.route")
const { DashProductRouter } = require("./src/Routes/DashProduct.route")
const { GetProductRouter } = require("./src/Routes/Product.route")
const { CartRouter } = require("./src/Routes/Cart.route")
const app=express()

app.use(cors())
app.use(express.json())

// app.use("/",(req,res)=>{
//     res.status(200).send("Welcome To PharmBuddy API")
// })

app.use("/userauth",UserAuthRouter)
app.use("/Dashproduct",DashProductRouter)
app.use("/product",GetProductRouter)

app.use('/',adminRouter)
app.use("/cart",CartRouter)
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