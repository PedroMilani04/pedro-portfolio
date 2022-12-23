
import '../css/App.css';
import Navbar from './Navbar';
import Info from './Info';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import "../css/Navbar.css"


export const ThemeContext = createContext(null);

function App() {
  const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(isActive => !isActive);
    };

  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      <div className="App" id={theme}>
      
      <BrowserRouter>
            <header>
                <nav>
                    <h1> <a href="#">Pedro</a> </h1>
                    <div className="mobile-menu" onClick={handleClick}>
                        <div className={isActive ? 'line1change' : 'line1'} />
                        <div className={isActive ? 'line2change' : 'line2'} />
                        <div className={isActive ? 'line3change' : 'line3'} />
                    </div>

                    <ul className={isActive ? 'nav-list-active' : 'nav-list'}>
                        <ReactSwitch checkedIcon={false} uncheckedIcon={false} onChange={toggleTheme} checked={theme === "dark"} onColor="#949494"></ReactSwitch>
                        <li><Link to='#homepage' smooth className="linkhov">Home</Link></li>
                        <li><Link to='#aboutpage' smooth className="linkhov">About me</Link></li>
                        <li><Link to='#skillspage' smooth className="linkhov">Skills</Link></li>
                        <li><Link to='#portfoliopage' smooth className="linkhov">Portfolio</Link></li>
                        <li><Link to='#contactpage' smooth className="linkhov"> Contact</Link></li>

                    </ul>
                </nav>
            </header>
        </BrowserRouter>
        <Info></Info>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
