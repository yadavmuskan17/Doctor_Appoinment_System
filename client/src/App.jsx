import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import DoctorLogin from "./pages/DoctorLogin";
import DoctorDashBoard from "./DoctorDashBoard";
import SearchDoctor from "./pages/SearchDoctor";
import PatientAppointment from "./pages/PatientAppointment";
import MyPatient from "./pages/MyPatient";
import Signup from "./pages/Signup";
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="doctorlogin" element={<DoctorLogin/>}/>
          <Route path="signup" element={<Signup/>}></Route>
          <Route path="searchdoctor" element={<SearchDoctor/>} />
          <Route path="patientapp/:id" element={<PatientAppointment/>} />
        </Route>
      </Routes>
      <Routes>
         <Route path="doctordashboard" element={<DoctorDashBoard/>}>
           <Route path="mypatient" element={<MyPatient/>}/>
         </Route>
      </Routes>


    </BrowserRouter>

    </>
  )
}

export default App;