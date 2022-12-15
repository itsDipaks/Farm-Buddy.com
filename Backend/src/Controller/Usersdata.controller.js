// const { UserModel } = require("../Modles/Users.model")

// //......................Get All Users Prsent Only Access By Admin ...............................
// const GetAllusers=async(req,res)=>{
// try{
//     const AllUsersdata=await UserModel.find()
//     res.send(AllUsersdata)
// }catch(err){
//     res.send({msg:"Something Wents wrong Please Try Again"})
// }
// }

// // ........................Get UserWhose Id Passed.................................
// const GetSelectedUser=async(req,res)=>{
//     const {user_id}=req.params;
//     try{
//         const Userdata=await UserModel.findOne({user_id})
//         if(Userdata){
//             res.send(Userdata)
//         }else{
//             res.send({msg:"User Not Found please Provide Correct id"})
//         }
//     }catch(err){
//         res.send({msg:"Something Wents wrong Please Try Again"})
//     }
// }

// // ........................Delete selected User.................................
// const DeleteUser=async(req,res)=>{

// const {user_id}=req.params
// try{
//     const DeletedUser=await UserModel.findOneAndDelete({user_id})
//     if(DeletedUser){
//         res.send({msg:"User Deleted Success"})
//     }else{
//         res.send({msg:"User Not Found please Provide Correct id"})
//     }
// }catch(err){
//     res.send({msg:"Something Wents wrong Please Try Again"})
// }
// }

// //........................Update Seleted user .................................
// const UpdateUser=async(req,res)=>{
//     const {user_id}=req.params
//     const data=req.body
// try{
//     const UpdatedUser=await UserModel.findOneAndUpdate({user_id},{...data})
//     if(UpdatedUser){
//         res.send(UpdatedUser)
//     }else{
//         res.send({msg:"User Not Found please Provide Correct id"})
//     }
// }catch(err){
//     res.send({msg:"Something Wents wrong Please Try Again"})
// }
// }
// const UserController={GetAllusers,GetSelectedUser,DeleteUser,UpdateUser}
// module.exports={UserController}