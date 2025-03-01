import { useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';

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
                
          </div>
             <div style={{textAlign:"right", backgroundColor:"rgb(38, 73, 139)", padding:"20px", color:"#fff"}}>
            <Link to="mypatient" style={{position:"relative",right:"85%",color:"#fff"}}>  Appointments </Link>  
                <Button onClick={logout}>LOGOUT</Button>
             </div>
       <div>
<center>
<h3>   Welcome :- {localStorage.getItem("name")}</h3>
<h4>  Email :- {localStorage.getItem("email")}</h4>
</center>
     
       </div>
                
            
                
                 
                
                
                  
                   <Outlet/>
                  
                  
         
        </>
    )
}


export default DoctorDashBoard;