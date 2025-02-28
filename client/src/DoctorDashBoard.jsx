import { useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

const DoctorDashBoard=()=>{

   const navigate = useNavigate();

   useEffect(()=>{
      if (!localStorage.getItem("name"))
      {
         navigate("/");
      }
   }, []);


   const logout=()=>{
     localStorage.clear();
     navigate("/");
  }



    return(
        <>
          <div style={{backgroundColor:"lightblue"}}>  
            
                <h1> Welcome To Doctor Admin Panel</h1>
                
             </div>
             <div style={{textAlign:"right", backgroundColor:"yellow", padding:"20px", color:"blue"}}>
                 Welcome : {localStorage.getItem("name")}
                 Emial : {localStorage.getItem("email")}

                
                <a href="#" onClick={logout}> Logout </a> 
             </div>
          <div id="dotordashboard">
               <div id="docleftmenu">
                
             <Link to="mypatient">  My Appointments </Link>   
                  <br />
                  <br />
                 Patient List
                
                 </div>
                <div id="dashboarddata">
                  
                   <Outlet/>
                  
                   </div>
          </div>
        </>
    )
}


export default DoctorDashBoard;