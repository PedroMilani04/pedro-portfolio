
import '../css/App.css';
import Navbar from './Navbar';
import Info from './Info';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Info></Info>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Portfolio></Portfolio>
        
    </div>
  );
}

export default App;
