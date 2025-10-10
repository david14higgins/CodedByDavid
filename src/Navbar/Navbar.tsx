import './Navbar.css';
import { Element, Link } from "react-scroll";
import Links from '../Links/Links';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <Links />
                <ul>
                    <li><Link to="home-page" smooth={true} duration={1000}>Home</Link></li>
                    <li><Link to="about-page" smooth={true} duration={1000}>About</Link></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                </nav>
        </>
    )
}

export default Navbar;