import "../css/Navbar.css"
import { useState } from "react";

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        // 👇️ toggle isActive state on click
        setIsActive(isActive => !isActive);
      };

    return (
        <header>
            <nav>
                <h1> <a href="#">Pedro</a> </h1>
                <div className="mobile-menu"  onClick={handleClick}>
                    <div className={isActive ? 'line1change' : 'line1'} />
                    <div className={isActive ? 'line2change' : 'line2'} />
                    <div className={isActive ? 'line3change' : 'line3'} />
                </div>
                <ul className={isActive ? 'nav-list-active' : 'nav-list'}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;