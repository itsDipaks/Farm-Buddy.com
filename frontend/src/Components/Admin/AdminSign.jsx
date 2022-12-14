import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Box,
    Button,
  } from '@chakra-ui/react'
import { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const AdminSign = () => {
  const [firstname,setFirstName]=useState("")
  const [lastname,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password, setPassword] = useState('')
  const [error,setError]= useState(false)
  // const navigate=useNavigate()




// Submit Function
const handleSubmit=()=>{
    const payload={
      firstname,
      email,
      lastname,
      password
    }
    // Signup request with payload
axios.post("http://localhost:8400/adminsignup",payload)
.then((res)=>{
  alert(res.data.msg)
})
.catch(function (err){
  alert(err.response.data.msg)
  setError(true)
})
}


  return (

     <Box w='30%' m='auto' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' p='5' mt='100px'>
      <Box textAlign='center' fontWeight="bold" fontSize="22px">Admin </Box>
      <FormControl>
      <FormLabel>First Name*</FormLabel>
        <Input type="text" placeholder='First Name' value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
        <FormLabel>Last Name</FormLabel>
        <Input type="text" placeholder='Last Name' value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
        <FormLabel>Email*</FormLabel>
        <Input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        {
          error?<FormErrorMessage>Email is required.</FormErrorMessage>:""
        }
        <FormLabel>Password*</FormLabel>
        <Input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button mt="15px" mb={5} _hover={{ bg: "rgb(65, 63, 63)" }} w="100%" color="white"  bg="black" onClick={handleSubmit}>Sign Up</Button>
        <Link to="/adminlogin">
        <Button w='100%' _hover={{ bg: "rgb(65, 63, 63)",color:'white' }} m='auto'> Already have an Account Login</Button>
        </Link>
      </FormControl>
    

     </Box>


    // <Box w="350px" m="auto" p="15px" mt="150px"  border="1px solid black" >
    // <Box fontWeight="bold" fontSize="22px" textAlign="center">Admin</Box>
    // <FormControl isInvalid={isEError}>
    //   <FormLabel>Email</FormLabel>
    //   <Input type='email' id="1" value={username} onChange={handleEmail} />
    //   {!isEError ? (
    //     <FormHelperText>
    //     </FormHelperText>
    //   ) : (
    //     <FormErrorMessage>Email is required.</FormErrorMessage>
    //   )}
    //     <FormLabel>Password</FormLabel>
    //     <Input type='password' id="2" value={password} onChange={handlePassword} />
    //   {!isPError ? (
    //     <FormHelperText>
    //     </FormHelperText>
    //   ) : (
    //     <FormErrorMessage>Password is required.</FormErrorMessage>
    //   )}
    //   <Button onClick={handleSubmit} mt="15px" _hover={{ bg: "rgb(65, 63, 63)" }} w="100%"      color="white"  bg="black">Log In</Button>
    // </FormControl>
    // </Box>
    
  )
}

export default AdminSign
