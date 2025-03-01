import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorLogin=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();

   const handleSubmit=async(e)=>{
    e.preventDefault();
    // let api="http://localhost:8000/doctor/doctorlogin";
     let api="https://doctor-appoinment-system-rag3.onrender.com/doctor/doctorlogin";
    

    try {
          const response = await axios.post(api, {email:email, password:password});
          console.log(response.data); 
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("docid", response.data._id);
          
          toast.success("You are Succesfully login!");
          navigate("/doctordashboard");
 
    } catch (error) {
        toast.error(error.response.data.msg);
        
    }

   }


    return(
        <>
        <center>
        <div style={{backgroundColor:"rgb(137, 219, 226)",width:"500px",height:"350px",
          marginTop:"40px",padding:"20px",borderRadius:"30px"}}>
          <h1 style={{color:"blue"}}>LOGIN</h1>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={email} 
        onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password}
        onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
    </div>
      </center>  
   

  
        </>
    )
}

export default DoctorLogin;