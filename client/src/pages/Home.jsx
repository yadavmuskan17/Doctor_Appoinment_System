import { useState, useEffect } from "react";

import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const Home = () => {
    const [mydata, setMydata] = useState([]);

    const navigate = useNavigate();
    const loadData = async () => {
        let api = "https://doctor-appoinment-system-1.onrender.com/doctor/homedoctorsdisplay";
        //let api = "http://localhost:8000/doctor/homedoctorsdisplay";
        try {
            const response = await axios.get(api);
            console.log(response.data);
            setMydata(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadData();
    }, []);


    const patApointment = (id) => {
        navigate(`/patientapp/${id}`)
    }

    let sno = 0;
    const ans = mydata.map((key) => {
        sno ++;
        return (
            <>
                <tr>
                    <td>{sno}</td>
                    <td>{key.name}</td>
                    <td>{key.specialization}</td>
                    <td>{key.email}</td>
                    <td>{key.city}</td>
                    <td>{key.mobile}</td>
                    <td>
                        <Button onClick={() => { patApointment(key._id) }}>Appoinment</Button>
                    </td>

                </tr>

            </>
        )
    })



    return (
        <>
            <h1></h1>

            <div style={{margin:"80px"}}>
                <h1>Doctor List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Doctor Name</th>
                            <th>Deparment</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Fees</th>
                            <th>Phone No</th>
                         

                        </tr>
                        {ans}
                    </thead>
                </Table>
            </div>


        </>
    )
}


export default Home;