import "../css/AboutMe.css";
import imagecode from "../img/coding.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
              I'm a 18 year old brazilian FrontEnd Dev seeking for professional,
              technical and work environment development. Always giving my best,
              being in constant search for knowledge and personal improvement,
              sharing my current knowledge and skills, while acquiring more and
              more along the way. Huge interest in technology, physics, history,
              programming, finances, books and nature!
            </div>
            <div className="cards">
              <div className="years" data-aos="flip-left">
                <span className="number" data-aos="flip-left">
                  +2
                </span>{" "}
                Years of experience
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="miter"
                  className="svgaward1"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M8,12.44V21l4-2,4,2V12.44"
                      stroke-linecap="round"
                    ></path>
                    <circle cx="12" cy="8" r="6"></circle>
                  </g>
                </svg>
              </div>
              <div className="projects" data-aos="flip-left">
                <span className="number">+8</span> Projects made
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svgaward1"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M3 9C3 8.01858 3 7.52786 3.21115 7.10557C3.42229 6.68328 3.81486 6.38885 4.6 5.8L7 4V4C7.69964 3.47527 8.04946 3.2129 8.43022 3.11365C8.79466 3.01866 9.17851 3.02849 9.53761 3.14203C9.91278 3.26065 10.2487 3.54059 10.9206 4.10046L12.5699 5.47491C13.736 6.44667 14.3191 6.93255 15.0141 6.95036C15.7091 6.96817 16.3163 6.51279 17.5306 5.60203L18 5.25V5.25C19.2361 4.32295 21 5.20492 21 6.75V14V15C21 15.9814 21 16.4721 20.7889 16.8944C20.5777 17.3167 20.1851 17.6111 19.4 18.2L17 20V20C16.3004 20.5247 15.9505 20.7871 15.5698 20.8863C15.2053 20.9813 14.8215 20.9715 14.4624 20.858C14.0872 20.7394 13.7513 20.4594 13.0794 19.8995L10.9206 18.1005C10.2487 17.5406 9.91278 17.2606 9.53761 17.142C9.17851 17.0285 8.79466 17.0187 8.43022 17.1137C8.04946 17.2129 7.69964 17.4753 7 18V18V18C6.3181 18.5114 5.97715 18.7671 5.7171 18.867C4.61978 19.2885 3.39734 18.6773 3.07612 17.5465C3 17.2786 3 16.8524 3 16V10V9Z"
                      stroke="#323232"
                      stroke-width="2"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M15 7.22924V20.5"
                      stroke="#323232"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M9 3.5V16.7083"
                      stroke="#323232"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="companies" data-aos="flip-left">
                <span className="number">01</span> Company worked
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svgaward1"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M1 22H23"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      opacity="0.4"
                      d="M19.7803 22.0098V17.5498"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M19.7996 10.8901C18.5796 10.8901 17.5996 11.8701 17.5996 13.0901V15.3601C17.5996 16.5801 18.5796 17.5601 19.7996 17.5601C21.0196 17.5601 21.9996 16.5801 21.9996 15.3601V13.0901C21.9996 11.8701 21.0196 10.8901 19.7996 10.8901Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M2.09961 21.9998V6.02979C2.09961 4.01979 3.09966 3.00977 5.08966 3.00977H11.3196C13.3096 3.00977 14.2996 4.01979 14.2996 6.02979V21.9998"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      opacity="0.4"
                      d="M5.7998 8.25H10.7498"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      opacity="0.4"
                      d="M5.7998 12H10.7498"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      opacity="0.4"
                      d="M8.25 22V18.25"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
            <div className="buttonscv">
              <a href="https://drive.google.com/file/d/1iu3Gi6gHTdxBt22ZaXtxY1Mf-Nk7c2ni/view?usp=sharing">
                <button className="cv">
                  <span>Download CV - English</span>
                </button>
              </a>
              <a href="https://drive.google.com/file/d/1iurvMbsVEEdTmlXp8FjtljMfOSyiG81_/view?usp=sharing">
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
