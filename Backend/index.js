const express=require("express")
const { connection } = require("./src/Config/db")

const app=express()


app.use(express.json())



app.listen(8400,async()=>{
try{
    await connection
    console.log("Server Connected With DataBase")
    console.log("Server Started At http://localhost:8400")
}catch(err){
console.log("Somethning Wents Wrong",err)
}
})