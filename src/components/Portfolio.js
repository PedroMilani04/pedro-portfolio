import "../css/Portfolio.css"
import image1 from "../img/portfolio1.png"
import image2 from "../img/portfolio2.png"
import image3 from "../img/portfolio3.png"
import image4 from "../img/portfolio4.png"


export default function Portfolio() {
    return (
        <div className="portfoliocontainer">

            <div className="aboutme">Portfolio</div>
            <div className="intro">My works</div>

            <div className="portfolio_container container">
                <div className="coluna">
                    <div className="row1">
                        <div className="portfolio_content grid">
                            <img src={image1} className="portimg1"></img>

                            <div className="portfolio_data">
                                <h3 className="portfolio_title">Destination</h3>
                                <p className="portfolio_desc">A simple "Catalog" Project using HTML5/CSS3/JS, showcasing various destinations around the world. Made specially for HTML5 and CSS3 training.</p>
                                <button className="goto"><span>Go to project</span></button>
                            </div>
                        </div>
                        <div className="portfolio_content grid">
                            <img src={image2} className="portimg1"></img>

                            <div className="portfolio_data">
                                <h3 className="portfolio_title">Web Pokédex</h3>
                                <p className="portfolio_desc">A web project using HTML5, CSS3 and JavaScript to create a stylized pokédex based on the game franchise "Pokémon".</p>
                                <button className="goto"><span>Go to project</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="portfolio_content grid">
                            <img src={image3} className="portimg1"></img>

                            <div className="portfolio_data">
                                <h3 className="portfolio_title">Tenzi Game</h3>
                                <p className="portfolio_desc">Project made with ReactJS and CSS3, inspired by the dice game "Tenzi". The objective is to roll the dices until all the numbers are the same.</p>
                                <button className="goto"><span>Go to project</span></button>
                            </div>
                        </div>
                        <div className="portfolio_content grid">
                            <img src={image4} className="portimg1"></img>

                            <div className="portfolio_data">
                                <h3 className="portfolio_title">React Calculator</h3>
                                <p className="portfolio_desc">A fully functional calculator made using ReactJS, including all the basic operations and features. </p>
                                <button className="goto"><span>Go to project</span></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}