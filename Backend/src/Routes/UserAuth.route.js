const {Router} = require("express");
const {UserModel} = require("../Modles/Users.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const UserAuthRouter = Router();


require("dotenv").config();

const PrivateKey = process.env.PRIVATEKEY;



UserAuthRouter.post("/signup",async (req, res) => {
  const {username, name, email, password, gender, age} = req.body;
  try {
    const UserExist = await UserModel.findOne({email});
    if (UserExist) {
      console.log(UserExist);
      res.send({msg: "User Exist Try Diffrent Email or Please Login"});
    } else {
      bcrypt.hash(password, 4, async function (err, hashedpassword) {
        if (!err) {
          const AddUser = new UserModel({
            username,
            name,
            email,
            password: hashedpassword,
            gender,
            age
          });
          await AddUser.save();
          res.send({msg: "User Signup Successfully"});
        } else {
          res.send({msg: "Something Wents Wrong Password Eror ", err});
        }
      });
    }
  } catch (err) {
    res.send({msg: "Something Wents Wrong please Try Again ", err});
  }
});




UserAuthRouter.post("/login", async (req, res) => {
  const {email, password} = req.body;
  try {
    if (email && password) {
      const isSignup = await UserModel.findOne({email});
      if (isSignup) {
        const signup_user_password = isSignup.password;
        const {username}=isSignup
        const user_id = isSignup._id;
        bcrypt.compare(password, signup_user_password).then(function (result) {
          if (result) {
            let token = jwt.sign(
              {
                // exp: Math.floor(Date.now() / 1000) + 10 * 30,
                user_id: user_id
              },
              PrivateKey
            );
            res.send({
              msg: "Login Sucessfully welcome To FarmEasy",
              token: token,
              username:username
            });
          } else {
            res.send({msg: "Password Is Wrong "});
          }
        });
      } else {
        res.send({msg: "User Not Found for this Email Plase Signup"});
      }
    } else {
      res.send({msg: "Input Field Is Missing"});
    }
  } catch (err) {
    res.send({msg: "SomeThing Wents Wrong please Try Again", err});
  }
});



module.exports = {UserAuthRouter};
