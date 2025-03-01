import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";

const TopMenu=()=>{
     const [input, setInput] = useState({});
  


    const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setInput(values=>({...values, [name]:value}));
       console.log(input);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        let api=`https://doctor-appoinment-system-rag3.onrender.com/doctor/registration`;
        try {
            const response = await axios.post(api, input);
            console.log(response);
            toast.success(response.data.msg);
            setShow(false)
        } catch (error) {
            console.log(error);
        }


        
    }
    return(
        <>
           <Navbar style={{backgroundColor:"rgb(38, 73, 139)"}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Doctor Appointment </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="signup">Sign-Up</Nav.Link>
            <Nav.Link as={Link} to="doctorlogin">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



        </>
    )
}

export default TopMenu;