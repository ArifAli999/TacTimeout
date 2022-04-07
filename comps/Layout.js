import Link from "next/link";
import Navbar from "./nav";
const Layout = ({children}) => {


    return (
        <div className="content">
        <Navbar/>
        { children }
        
        </div>
    );
}

export default Layout;