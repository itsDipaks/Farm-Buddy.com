import React, { useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Image,
  Stack,
  // HStack,
  // PinInput,
  // PinInputField,
  // Popover,
  // PopoverTrigger,
  // PopoverContent,
  // PopoverBody,
  Select,
  Text,
  // Link,
} from "@chakra-ui/react";
import axios from "axios";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [show, setShow] = useState(true);
  const [hello, setHello] = useState("Log in");
  // const [changeComp, setChangeComp] = useState(true);

  // const handleChange = (e) => {
  //   let { name, value } = e.target;
  //   setEmail({ ...email, [name]: value });
  // };


  const options = ["Male", "Female", "Prefer Not To Say"];
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };

  // const handleClick = async () => {
  //   if (
  //     email === ""
  //   ) {
  //     alert("Incorrect Email Id");
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  //   // let res = await axios.post("#", email);
  //   // console.log(res);
  // };

  const [values,setValues] = useState({
    username:"",
    name:"",
    email:"",
    password:"",
    gender:"",
    age:"",
    // profileimage:"",
})
const handleChange = (e) => {
    setValues({...values,[e.target.name]:e.target.value})
}



const Loginscreen = () =>{
  setShow(false);
}


  const handleSignUp = () => {
    const payload = {
      username: values.username,
      name: values.name,
      email: values.email,
      password: values.password,
      gender: values.gender,
      age: values.age,
      // profileimage: values.profileimage,
    };
    axios.post("http://localhost:8400/userauth/signup", payload).then((r) => {
      if (r.status === 200) {
        setShow(false);
        console.log("Success");
        console.log(r); 
      } else {
        alert("Incorrect Email Id");
        setShow(true);
      }
    });
  };

  // LoginPart

  const [valuess, setValuess] = useState({
    email: "",
    password: "",
  });


  const LoginhandleChange = (e) => {
    setValuess({ ...valuess, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    const payload = {
      email: valuess.email,
      password: valuess.password,
    };


    axios.post("http://localhost:8400/userauth/login", payload).then((r) => {
      if (r.status === 200) {
        console.log('success');
        console.log(r);
        // console.log(r.data);
        // console.log(r.data.username);
        setHello(r.data.username)

        onClose()
        // var usernamess = r.data.username;
      } else {
        alert("Incorrect Email Id or Password");
      }
    });
  };

  // const logout = () => {
  //   // setChangeComp(true);
  //   setHello("Hello, Log in");
  //   localStorage.removeItem("userdetail");
  //   navigate("/");
  // };

  return (
    <div>
      {/* {changeComp ? ( */}
      <div>
        <Button
          ref={btnRef}
          onClick={onOpen}
          variant="ghost"
          color="black"
          _hover="none"
          fontWeight="500"
          width="100px"
          fontSize={"14px"}
          colorScheme="gray"
        >
         Hello {hello}
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="sm"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton
              marginRight="436px"
              style={{
                backgroundColor: "#10847E",
                padding: "30px",
                border: "none",
                color: "white",
                marginTop: "20px",
                borderRadius: "0px",
              }}
            />
            <Image src="https://i.postimg.cc/x1dpN9GZ/Screenshot-2022-07-21-at-7-20-12-PM.png" />
            {show ? (
              <div>
                <DrawerHeader justifyContent='space-between' display='flex' fontSize="16px" fontWeight="700">
                  <Text>Register</Text> 
                  <Text onClick={Loginscreen}>Login</Text> 
                </DrawerHeader>

                <DrawerBody pt='0.5' >
                  <Stack gap="5px">
                    <Input
                      borderRadius="8px"
                      height="40px"
                      borderColor="#767676"
                      _hover="none"
                      placeholder="Enter your username"
                      onChange={handleChange}
                      name="username"
                    />
                    <Input
                      borderRadius="8px"
                      height="40px"
                      borderColor="#767676"
                      _hover="none"
                      type={"email"}
                      placeholder="Enter your email address"
                      onChange={handleChange}
                      name="email"
                    />
                    <Input
                      borderRadius="8px"
                      height="40px"
                      borderColor="#767676"
                      _hover="none"
                      type={"password"}
                      placeholder="Enter Password"
                      onChange={handleChange}
                      name="password"
                    />
                    <Input
                      borderRadius="8px"
                      height="40px"
                      borderColor="#767676"
                      _hover="none"
                      type={"name"}
                      placeholder="Enter Your Name"
                      onChange={handleChange}
                      name="name"
                    />
                    {/* <Input
                      placeholder="Profile Picture"
                      borderRadius="8px"
                      border="none"
                      borderColor="#767676"
                      _hover="none"
                      type={"file"}
                      onChange={handleChange}
                      name="profileimage"
                    /> */}
                    <Select name="gender" onChange={handleChange}>
                      <option>Select Gender</option>
                      {options.map((option, index) => {
                        return (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        );
                      })}
                    </Select>
                    <Input
                      borderRadius="8px"
                      height="40px"
                      borderColor="#767676"
                      _hover="none"
                      onChange={handleChange}
                      placeholder="Enter Your Age"
                      type={"number"}
                      name="age"
                    />
                    <Button
                      height="50px"
                      bg="#37857e"
                      color="white"
                      fontWeight="700"
                      fontSize="15px"
                      _hover="none"
                      onClick={handleSignUp}
                    >
                      Regiter Now
                    </Button>
                    <p style={{ fontSize: "13px" }}>
                      By clicking continue, you agree with our
                      <span style={{ color: "#37857e", fontWeight: "600" }}>
                        {" "}
                        Privacy Policy
                      </span>
                    </p>
                  </Stack>
                </DrawerBody>
              </div>
            ) : (
              <div>
                <DrawerHeader fontSize="16px" fontWeight="700">
                  Login From Here...
                </DrawerHeader>

                <DrawerBody>
                  <Stack gap="10px">
                    {/* <Input
                    borderRadius="8px"
                    height="50px"
                    borderColor="#767676"
                    _hover="none"
                    type={"text"}
                    placeholder="Enter your email address"
                    onChange={handleChange}
                    name="email"
                  /> */}
                    <Stack gap={5}>
                      <Input
                        borderRadius="8px"
                        height="50px"
                        borderColor="#767676"
                        _hover="none"
                        type={"email"}
                        placeholder="Enter your email address"
                        onChange={LoginhandleChange}
                        name="email"
                      />

                      <Input
                        borderRadius="8px"
                        height="50px"
                        borderColor="#767676"
                        _hover="none"
                        type={"password"}
                        placeholder="Enter Password"
                        onChange={LoginhandleChange}
                        name="password"
                      />
                    </Stack>
                    <Button
                      height="50px"
                      bg="#37857e"
                      color="white"
                      fontWeight="700"
                      fontSize="15px"
                      _hover="none"
                      onClick={handleLogin}
                    >
                      Continue
                    </Button>
                    <p style={{ fontSize: "13px" }}>
                      By clicking continue, you agree with our
                      <span style={{ color: "#37857e", fontWeight: "600" }}>
                        {" "}
                        Privacy Policy
                      </span>
                    </p>
                  </Stack>
                </DrawerBody>
              </div>
            )}
          </DrawerContent>
        </Drawer>
      </div>
      {/* )
       : (
        <div>
          <Popover trigger="hover">
            <PopoverTrigger>
              <Button
                marginLeft={"5px"}
                variant={"link"}
                fontSize="14px"
                color={"gray.600"}
                fontWeight="500"
              >
                {hello}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverBody>
                <Button
                  colorScheme="gray"
                  variant="ghost"
                  width={"100%"}
                  justifyContent="flex-start"
                >
                  My Orders
                </Button>
                <Button
                  colorScheme="gray"
                  variant="ghost"
                  width={"100%"}
                  justifyContent="flex-start"
                >
                  Refer & Earn
                </Button>
                <Button
                  colorScheme="gray"
                  variant="ghost"
                  width={"100%"}
                  justifyContent="flex-start"
                >
                  My Refills
                </Button>
                <Button
                  colorScheme="gray"
                  variant="ghost"
                  width={"100%"}
                  justifyContent="flex-start"
                >
                  Medical Records
                </Button>
                <Link to="/account">
                  {" "}
                  <Button
                    colorScheme="gray"
                    variant="ghost"
                    width={"100%"}
                    justifyContent="flex-start"
                  >
                    My Profile
                  </Button>
                </Link>
                <Button
                  colorScheme="gray"
                  variant="ghost"
                  width={"100%"}
                  justifyContent="flex-start"
                >
                  Wallets
                </Button>
                <Button
                  colorScheme="gray"
                  variant="ghost"
                  width={"100%"}
                  justifyContent="flex-start"
                >
                  Nofitications
                </Button>
                <Button
                  fontWeight={"400"}
                  colorScheme="gray"
                  variant="ghost"
                  width={"100%"}
                  justifyContent="flex-start"
                  // onClick={logout}
                >
                  Log Out
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
      )} */}
    </div>
  );
};

export default Login;
