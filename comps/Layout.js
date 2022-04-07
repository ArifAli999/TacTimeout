import Link from "next/link";
import Navbar from "./nav";
const Layout = ({children}) => {


    return (
        <div className="content">
        <Navbar/>
        <div className="maincontainer">
        { children }
        </div>
       
        
        </div>
    );
}

export default Layout;