import Link from "next/link";
import Navbar from "./nav";
import "uikit/dist/css/uikit.min.css";

const Layout = ({children}) => {


    return (
    <div className='container'>
        <Navbar/>
        <div className="maincontainer">
          
        { children }
        </div>
       
        </div>
    
    );
}

export default Layout;