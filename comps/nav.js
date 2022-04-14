import Link from "next/link";
import styles from './nav.module.css'
import { useRouter } from "next/router";


const Navbar = () => {
    const router = useRouter();


    return (
    
            <div className={styles.navbar}>
            <Link href="/" ><li className={styles.navli}><a className={router.pathname == "/" ? "activee" : "lia"}>Home</a></li></Link>
            <Link href="/live" ><li className={styles.navli}>
                <a className={router.pathname == "/live" ? "activee" : "lia"}>Live</a>
            </li>
            </Link>
            <Link href="/upcoming" ><li className={styles.navli}><a className={router.pathname == "/upcoming" ? "activee" : "lia"}>Upcoming </a></li></Link>


              

            </div>
    
    );
}

export default Navbar;