import Link from "next/link";
import Navbar from "./nav";
import "uikit/dist/css/uikit.min.css";
import { useRouter } from 'next/router';
import Head from "next/head";
import Router from "next/router";
import QuickNav from "./quicknav";





const Layout = ({ children }) => {

    const router = useRouter();

    return (
        <div className='container'>
            <Head>
                <title> {router.pathname.toUpperCase()} Page</title>
            </Head>
            <Navbar />

           <QuickNav/>
            <div className="maincontainer">
                {children}
            </div>
        </div>
    );
}

export default Layout;