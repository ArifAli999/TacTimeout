import Link from "next/link";
const Navbar = () => {


    return (
        <nav>
            <div className="nav-bar">
            <Link href="/" ><a className="nav-link">Home</a></Link>
            <Link href="/live" ><a className="nav-link">Lives</a></Link>
            <Link href="/upcoming" ><a className="nav-link">Upcoming </a></Link>


              

            </div>
        </nav>
    );
}

export default Navbar;