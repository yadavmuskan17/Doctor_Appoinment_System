import axios from "axios";
import { useState, useEffect } from "react";

import Table from 'react-bootstrap/Table';
const MyPatient=()=>{
    const [mydata, setMydata] = useState([]);

    const loadData=async()=>{
        let api=`        let api = "https://doctor-appoinment-system-rag3.onrender.com/doctor/homedoctorsdisplay";https://doctor-appoinment-system-rag3.onrender.com
/doctor/patientlist/?docid=${localStorage.getItem("docid")}`;
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    }, []);


    const ans= mydata.map((key)=>{
         return(
            <>
              <tr>
                <td>{key.name}</td>
                <td>{key.disease}</td>
                <td>{key.city}</td>
                <td>{key.mobile}</td>
                <td>{key.email}</td>
              </tr>
            
            </>
         )
    })


    return(
        <>
          <h1> Patient List</h1>
          <hr />
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Pateint Name</th>
          <th>Disease</th>
          <th>City</th>
          <th>Mobile no.</th>
          <th> Email</th>
        </tr>
      </thead>
      <tbody>
         {ans}
        </tbody>
        </Table>

        
        </>
    )
}

export default MyPatient;