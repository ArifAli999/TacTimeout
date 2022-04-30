import Link from "next/link";
import Navbar from "./nav";
import "uikit/dist/css/uikit.min.css";
import { withRouter } from 'next/router'
import { useRouter } from 'next/router';

import Head from "next/head";
const Layout = ({children},{router}) => {
    const { asPath, pathname } = useRouter();
    const titename =  asPath.replace(/\b\w/g, l => l.toUpperCase())
    
    

    return (
    <div className='container'>
     <Head>
    <title> { titename.slice(1)} Page</title>
    </Head>
        <Navbar/>
        <div className="maincontainer">
          
        { children }
        </div>
       
        </div>
    
    );
}

export default Layout;