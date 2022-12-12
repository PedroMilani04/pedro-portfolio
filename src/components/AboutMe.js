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
                <div className="summary"> FrontEnd Dev. Seeking for professional, technical and work environment development. Always giving my best, being in constant search for knowledge and personal improvement, sharing my current knowledge and skills, while acquiring more and more along the way.
 </div>
                <div className="cards">
                    <div className="years"><span className="number">02</span> Years of experience</div>
                    <div className="projects"><span className="number">09</span> Projects made</div>
                    <div className="companies"><span className="number">01</span> Company worked</div>
                </div>
                <button className="cv"><span>Download CV</span></button>
                </div>
            </div>
        </div>
        </div>
    )
}