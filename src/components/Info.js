import "../css/Info.css"
import img1 from "../img/img1.jpg"

function Info() {
    
    return (
        <div className="info">
            <div className="info1">
                <div className="name">Hi! I'm Pedro</div>
                <div className="title">Frontend Developer and AWS Cloud Practicioner</div>
                <div className="about">Experience in ReactJS and Amazon Web Services. Always in seek of knowledge, experiences and opportunities to aggregate!</div>
                <button className="clickme"><span>Contact me</span></button>
            </div> 
            <div className="img"> <img src={img1} /> </div>
        </div>
    )
}

export default Info;