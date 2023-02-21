import "../css/AboutMe.css"
import imagecode from "../img/coding.jpg"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function AboutMe() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
      <div className="all" id="aboutpage">
        <div className="aboutall">
          <div className="top">
            <div className="aboutme" data-aos="fade-up">
              About Me
            </div>
            <div className="intro" data-aos="fade-down">
              Introduction
            </div>
          </div>
          <div className="personalinfo">
            <div className="image">
              {" "}
              <img src={imagecode} />
            </div>
            <div className="personalinfochild">
              <div
                className="summary"
                data-aos="fade-left"
                data-aos-duration="1300"
              >
                {" "}
                I'm a 18 year old brazilian FrontEnd Dev seeking for
                professional, technical and work environment development. Always
                giving my best, being in constant search for knowledge and
                personal improvement, sharing my current knowledge and skills,
                while acquiring more and more along the way. Huge interest in
                technology, physics, history, programming, finances, books and
                nature!
              </div>
              <div className="cards">
                <div className="years" data-aos="flip-left">
                  <span className="number" data-aos="flip-left">
                    02
                  </span>{" "}
                  Years of experience
                </div>
                <div className="projects" data-aos="flip-left">
                  <span className="number">09</span> Projects made
                </div>
                <div className="companies" data-aos="flip-left">
                  <span className="number">01</span> Company worked
                </div>
              </div>
              <div className="buttonscv">
                <a href="https://drive.google.com/file/d/1O0lNGPOGAnYGuz0iTxbRcKQ5g2mGax9G/view?usp=sharing">
                  <button className="cv">
                    <span>Download CV - English</span>
                  </button>
                </a>
                <a href="https://drive.google.com/file/d/1NR3m49W4M0qwec-HLQrQuM89iYbPs8l2/view?usp=sharing">
                  <button className="cv">
                    <span>Download CV - Portuguese</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
