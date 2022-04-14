import Link from "next/link";
import styles from './nav.module.css'
import { useRouter } from "next/router";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js"
import uikit from "uikit";
import { useEffect } from "react";


const Navbar = () => {
    const router = useRouter();

  useEffect(() => {
 

       
  
  }, [])

   
    function hideMenu() {
        process.browser && uikit.offcanvas('#my-id').hide();
        }

 
 
 
   

    return (



        <>
            <button data-uk-toggle="target: #my-id" type="button">Menu</button>

            <a href="#my-id" data-uk-toggle></a>

            <div id="my-id" data-uk-offcanvas>
                <div className="uk-offcanvas-bar">

                    <ul class="uk-nav-default uk-nav-parent-icon" data-uk-nav>
                        <Link href="/" ><a href="">Home</a></Link>
                        <li className="uk-parent">
                            <a href="#">Live Games</a>
                            <ul class="uk-nav-sub" onClick={hideMenu()}>

                            <Link href="/live/val" ><a className={styles.nava}>Valorant</a></Link>
                            <Link href="/live/csgo" ><a className={styles.nava}>CS:GO</a></Link>
                            <Link href="/live/fifa" ><a className={styles.nava}>Fifa</a></Link>
                            <Link href="/live/dot" ><a className={styles.nava}>Dota</a></Link>

                            </ul>
                        </li>
                        <li className="uk-parent">
                            <a href="#">Upcoming Games</a>
                            <ul class="uk-nav-sub">
                            <Link href="/upcoming/valorant" ><a className={styles.nava}>Valorant</a></Link>
                            <Link href="/upcoming/csgo" ><a className={styles.nava}>CS:GO</a></Link>
                            <Link href="/upcoming/fifa" ><a className={styles.nava}>Fifa</a></Link>
                            <Link href="/upcoming/dota" ><a className={styles.nava}>Dota</a></Link>

                            </ul>
                        </li>

                    </ul>

                    <button className="uk-offcanvas-close" type="button">Close</button>

                </div>
            </div>
        </>

    );
}

export default Navbar;