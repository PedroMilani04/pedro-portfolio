import "../css/Skills.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

    return (
      <div className="skillaround" id="skillspage">
        <div className="aboutme" data-aos="fade-up">
          Skills
        </div>
        <div className="intro" data-aos="fade-down">
          Technical level
        </div>
        <div className="skillscolunas">
          <div className="allSkills">
            <h1 className="skillh1" data-aos="fade-right">
              Hard Skills
            </h1>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">HTML5</h3>
                <span className="percentage">Advanced</span>
              </div>
              <div className="percbar">
                <span className="skillperc skillhtmlpercentage"></span>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">CSS3</h3>
                <span className="percentage">Advanced</span>
              </div>
              <div className="percbar">
                <span className="skillperc skillcsspercentage"></span>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">JavaScript</h3>
                <span className="percentage">Intermediate</span>
              </div>
              <div className="percbar">
                <span className="skillperc skilljspercentage"></span>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">ReactJS</h3>
                <span className="percentage">Advanced</span>
              </div>
              <div className="percbar">
                <span className="skillperc skillreactpercentage"></span>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">Python</h3>
                <span className="percentage">Basic</span>
              </div>
              <div className="percbar">
                <span className="skillperc skillpythonpercentage"></span>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">AWS</h3>
                <span className="percentage">Advanced</span>
              </div>
              <div className="percbar">
                <span className="skillperc skillawspercentage"></span>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">MySQL</h3>
                <span className="percentage">Intermediate</span>
              </div>
              <div className="percbar">
                <span className="skillperc skillsqlpercentage"></span>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">NodeJS</h3>
                <span className="percentage">Basic</span>
              </div>
              <div className="percbar">
                <span className="skillperc skillnodepercentage"></span>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">Office 365</h3>
                <span className="percentage">Advanced</span>
              </div>
              <div className="percbar">
                <span className="skillperc skillofficepercentage"></span>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">Markdown</h3>
                <span className="percentage">Advanced</span>
              </div>
              <div className="percbar">
                <span className="skillperc skillmdpercentage"></span>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">Photoshop</h3>
                <span className="percentage">Basic</span>
              </div>
              <div className="percbar">
                <span className="skillperc skillphotoshoppercent"></span>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">Sass</h3>
                <span className="percentage">Intermediate</span>
              </div>
              <div className="percbar">
                <span className="skillperc skillsasspercentage"></span>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">English</h3>
                <span className="percentage">Fluent</span>
              </div>
              <div className="percbar" >
                <span className="skillperc skillenglishpercentage"></span>
              </div>
            </div>
          </div>
          <div className="allSkills">
            <h1 className="skillh1" data-aos="fade-left">
              Soft Skills
            </h1>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">• Problem Solving</h3>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">• Creativity</h3>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">• Versatility</h3>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">• Research</h3>
              </div>
            </div>
            
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">• Resilience</h3>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">• Team work</h3>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname">• Comunication</h3>
              </div>
            </div>
            <div className="skill">
              <div className="skilltitle">
                <h3 className="skillname"> • Proactivity</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}