import "../css/Info.css"
import img1 from "../img/img1.jpg"
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";


function Info() {

    return (
        <BrowserRouter>
            <div className="info" id="homepage">
                <div className="info1">
                    <div className="name">Hi! I'm Pedro</div>
                    <div className="title">Frontend Developer and AWS Cloud Practicioner</div>
                    <div className="about">Experience in ReactJS and Amazon Web Services. Always in seek of knowledge, experiences and opportunities to aggregate!</div>
                    <Link to='#contactpage' smooth> <button className="clickme"><span>Contact me</span></button> </Link>
                </div>
                <div className="img"> <img src={img1} /> </div>
            </div>
        </BrowserRouter>
    )
}

export default Info;