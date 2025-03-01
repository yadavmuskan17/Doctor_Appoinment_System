import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Signup = () => {
  const [input, setInput] = useState({});


  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let api = `https://doctor-appoinment-system-rag3.onrender.com/doctor/registration`;
    try {
      const response = await axios.post(api, input);
      console.log(response);
      alert(response.data.msg);
     
    } catch (error) {
      console.log(error);
    }



  }
  return (
    <>
    <center>
    <div style={{backgroundColor:"rgb(137, 219, 226)",width:"500px",marginTop:"40px",padding:"20px"}}>
      <h1 style={{color:"blue"}}>Sign-Up</h1>
        <Form style={{ width: "400px" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Doctor Name</Form.Label>
            <Form.Control type="text" name="name" onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter City</Form.Label>
            <Form.Control type="text" name="city" onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Mobile no</Form.Label>
            <Form.Control type="text" name="mobile" onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Specialization</Form.Label>
            <Form.Select aria-label="Default select example" name="speciality" onChange={handleInput}>
              <option>select</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Neuro Surgeon">Neuro Surgeon</option>
              <option value="Dentist">Dentist</option>
              <option value="Dermatologist">Dermatologist</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter email</Form.Label>
            <Form.Control type="email" name="email" onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={handleInput} />
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </center>
    



    </>
  )
}

export default Signup;