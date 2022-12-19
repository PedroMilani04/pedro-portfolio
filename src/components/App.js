
import '../css/App.css';
import Navbar from './Navbar';
import Info from './Info';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Info></Info>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Contact></Contact>
    </div>
  );
}

export default App;
