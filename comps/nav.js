import Link from "next/link";
const Navbar = () => {


    return (
        <nav>
            <div className="nav-bar">
            <Link href="/"><a>Home</a></Link>
            <Link href="/live"><a>Lives</a></Link>


              

            </div>
        </nav>
    );
}

export default Navbar;