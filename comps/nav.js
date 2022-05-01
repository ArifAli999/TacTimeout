import Link from "next/link";
import styles from './nav.module.css'
import { useRouter } from "next/router";
import "uikit/dist/css/uikit.min.css";
import uikit from "uikit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import valIcon from '../public/valorant.svg';



const Navbar = () => {
    const router = useRouter();

    function hideMenu() {
        process.browser && uikit.offcanvas('#my-id').hide();
    }






    return (



        <>
            <button data-uk-toggle="target: #my-id" type="button" className="menubtn" aria-label="menu">
            <FontAwesomeIcon icon={faBars} />
               </button>

            <a href="#my-id" aria-label="menu" data-uk-toggle></a>

            <div id="my-id" data-uk-offcanvas>
                <div className="uk-offcanvas-bar">

                    <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>
                        <Link href="/" ><li className="uk-nav" onClick={hideMenu()}><a href="">Home</a></li></Link>
                        <li className="uk-parent">
                            <a href="#" className="parentLink">Live Games</a>
                            <ul className="uk-nav-sub" onClick={hideMenu()}>

                            <li className="sub-links">
                                <span className={router.pathname == "/live/val" ? "is-pulled-right valImg onn " : "is-pulled-right valImg"}></span>
                                    <Link href="/live/val" >
                                        <a className={styles.nava}>Valorant</a>
                                    </Link></li>


                                    <li className="sub-links">  
                                    <span className={router.pathname == "/live/csgo" ? "is-pulled-right csImg onn " : "is-pulled-right csImg"}></span>
                                     <Link href="/live/csgo" >
                                    <a className={styles.nava}>CS:GO</a>
                                    </Link></li>

                                    <li className="sub-links">
                                    <span className={router.pathname == "/live/fifa" ? "is-pulled-right fifImg onn " : "is-pulled-right fifImg"}></span>
                                <Link href="/live/fifa" >
                                   <a className={styles.nava}>Fifa</a>
                                   </Link></li>

                                   <li className="sub-links">
                                   <span className={router.pathname == "/live/dot" ? "is-pulled-right dotImg onn " : "is-pulled-right dotImg"}></span>
                                <Link href="/live/dot" >
                                <a className={styles.nava}>Dota</a></Link></li>

                               

                            </ul>
                        </li>
                        <li className="uk-parent">
                            <a href="#" className="parentLink">Upcoming Games</a>
                            <ul className="uk-nav-sub">


                                    <li className="sub-links">  
                                    <span className={router.pathname == "/upcoming/csgo" ? "is-pulled-right csImg onn " : "is-pulled-right csImg"}></span>
                                     <Link href="/upcoming/csgo" >
                                    <a className={styles.nava}>CS:GO</a>
                                    </Link></li>

                                    <li className="sub-links">
                                    <span className={router.pathname == "/upcoming/fifa" ? "is-pulled-right fifImg onn " : "is-pulled-right fifImg"}></span>
                                <Link href="/upcoming/fifa" >
                                   <a className={styles.nava}>Fifa</a>
                                   </Link></li>

                                   <li className="sub-links">
                                   <span className={router.pathname == "/upcoming/dota" ? "is-pulled-right dotImg onn " : "is-pulled-right dotImg"}></span>
                                <Link href="/upcoming/dota" >
                                <a className={styles.nava}>Dota</a></Link></li>

                            </ul>
                        </li>


                        <li className="uk-parent">
                            <a href="#" className="parentLink">Past Games</a>
                            <ul className="uk-nav-sub">

                                <li className="sub-links">
                                <span className={router.pathname == "/past/valp" ? "is-pulled-right valImg onn " : "is-pulled-right valImg"}></span>
                                    <Link href="/past/valp" >
                                        <a className={styles.nava}>Valorant</a>
                                    </Link></li>


                                    <li className="sub-links">  
                                    <span className={router.pathname == "/past/csgop" ? "is-pulled-right csImg onn " : "is-pulled-right csImg"}></span>
                                     <Link href="/past/csgop" >
                                    <a className={styles.nava}>CS:GO</a>
                                    </Link></li>

                                    <li className="sub-links">
                                    <span className={router.pathname == "/upcoming/fifa" ? "is-pulled-right fifImg onn " : "is-pulled-right fifImg"}></span>
                                <Link href="/upcoming/fifa" >
                                   <a className={styles.nava}>Fifa</a>
                                   </Link></li>

                                   <li className="sub-links">
                                   <span className={router.pathname == "/upcoming/dota" ? "is-pulled-right dotImg onn " : "is-pulled-right dotImg"}></span>
                                <Link href="/upcoming/dota" >
                                <a className={styles.nava}>Dota</a></Link></li>

                            </ul>
                        </li>

                    </ul>

                    <button className="uk-offcanvas-close" type="button"></button>

                </div>
            </div>
        </>

    );
}

export default Navbar;