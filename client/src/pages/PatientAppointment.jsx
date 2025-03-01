import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import axios from "axios";

import Button from "react-bootstrap/esm/Button";

const PatientAppointment=()=>{
    const {id} = useParams();
    const [docInfo, setDocInfo]= useState({});
    const [input, setInput] = useState({});
    const loadData=async()=>{
       //let api=`"http://localhost:8000/patient/pateintappnt/?id=${id}`;
       let api=`https://doctor-appoinment-system-rag3.onrender.com/patient/pateintappnt/?id=${id}`;
        try {
              const response= await axios.get(api);
              console.log(response.data);
              setDocInfo(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        loadData();
    }, [])

    const handleInput=(e)=>{
      let name= e.target.name ;
      let value= e.target.value;
      setInput(values=>({...values, [name]:value}));
      console.log(input);
    }


     const handleSubmit=async()=>{
        let api=`https://doctor-appoinment-system-rag3.onrender.com/patient/appntsave`;
        //let api=`http://localhost:8000/patient/appntsave`;
        try {
            const response = await axios.post(api, {docid:id, ...input});
            alert("data save");
        } catch (error) {
             console.log(error);
        }
     }
  
    return(
        <>
          <h1 align="center"> Patient Appointment  </h1>
           {/* <h4 style={{color:"blue"}} align="center"> Your Doctor : {docInfo.name} Speciality : {docInfo.specailization}</h4> */}
          <Form style={{width:"400px", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Patient Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Disease</Form.Label>
        <Form.Control type="text" name="disease" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name="city" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile no</Form.Label>
        <Form.Control type="text" name="mobile" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleInput} />
      </Form.Group>
      <center>
      <Button onClick={handleSubmit}> Appointment</Button>
      </center>
    </Form>
    <br /> <br />
        </>
      )
}

export default PatientAppointment;