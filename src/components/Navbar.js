import "../css/Navbar.css"
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(isActive => !isActive);
      };

    return (
        <BrowserRouter>
        <header>
            <nav>
                <h1> <a href="#">Pedro</a> </h1>
                <div className="mobile-menu"  onClick={handleClick}>
                    <div className={isActive ? 'line1change' : 'line1'} />
                    <div className={isActive ? 'line2change' : 'line2'} />
                    <div className={isActive ? 'line3change' : 'line3'} />
                </div>
                <ul className={isActive ? 'nav-list-active' : 'nav-list'}>
                    <li><Link to='#homepage' smooth>Home</Link></li>
                    <li><Link to='#aboutpage' smooth>About me</Link></li>
                    <li><Link to='#skillspage' smooth>Skills</Link></li>
                    <li><Link to='#portfoliopage' smooth>Portfolio</Link></li>
                    <li><Link to='#contactpage' smooth>Contact</Link></li>
                    
                </ul>
            </nav>
        </header>
        </BrowserRouter>
    )
}
export default Navbar;