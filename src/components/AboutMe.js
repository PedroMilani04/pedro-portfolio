import "../css/AboutMe.css"

export default function AboutMe() {
    return (
        <div className="all">
        <div className="aboutall">
            <div className="top">
                <div className="aboutme">About Me</div>
                <div className="intro">Introduction</div>
            </div>
            <div className="personalinfo">
            <div className="image"></div>
            <div className="personalinfochild">
                <div className="summary"> pedropedropedropedropedropedropedropedropedropedropedropedropedropedropedropedropedropedropedropedropedropedropedropedropedropedropedropedropedropedro </div>
                <div className="cards">
                    <div className="years">02 years</div>
                    <div className="projects">9 projects</div>
                    <div className="companies">1 company</div>
                </div>
                <button className="cv"><span>Download CV</span></button>
                </div>
            </div>
        </div>
        </div>
    )
}