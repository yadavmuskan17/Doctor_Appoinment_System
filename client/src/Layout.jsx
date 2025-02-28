import {Outlet} from "react-router-dom";
import TopMenu from "./components/TopMenu";

const Layout=()=>{
    return(
        <>
           <TopMenu/>
              <Outlet/>
        
        </>
    )
}

export default Layout;