import "../css/Portfolio.css"
import image1 from "../img/portfolio1.png"
import image2 from "../img/portfolio2.png"
import image3 from "../img/portfolio3.png"
import image4 from "../img/portfolio4.png"
import image5 from "../img/portfolio5.png"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Portfolio() {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);

    return (
      <div className="portfoliocontainer" id="portfoliopage">
        <div className="aboutme" data-aos="fade-up">
          Projects
        </div>
        <div className="intro" data-aos="fade-down">
          My works
        </div>

        <div className="portfolio_container container">
          <div className="containercolunas">
            <div className="coluna">
              <div className="row1">
                <div className="portfolio_content grid">
                  <div className="portfolioback">
                    <img src={image1} className="portimg1"></img>

                    <div className="portfolio_data">
                      <h3
                        className="portfolio_title"
                        data-aos="fade-down"
                        data-aos-duration="700"
                      >
                        Movement Detection 
                      </h3>
                      <p className="portfolio_desc" data-aos="fade-left">
                      A pre-trained machine learning project, using of tools like Web Workers for the Machine Learning process execution, TensorFlowJS and a variety of APIs.
                      </p>
                      <a href="https://pedromilani04.github.io/hands-detection-stream/pages/titles/">
                        <button className="goto">
                          <span>Go to project</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio_content grid">
                  <div className="portfolioback">
                    <img src={image2} className="portimg1"></img>

                    <div className="portfolio_data">
                      <h3
                        className="portfolio_title"
                        data-aos="fade-down"
                        data-aos-duration="700"
                      >
                        Web Pokédex
                      </h3>
                      <p className="portfolio_desc" data-aos="fade-left">
                        A web project using HTML5, CSS3 and JavaScript to create
                        a stylized pokédex based on the game franchise
                        "Pokémon".
                      </p>
                      <a href="https://pokedex-ph.vercel.app/">
                        <button className="goto">
                          <span>Go to project</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row2">
                <div className="portfolio_content grid">
                  <div className="portfolioback">
                    <img src={image3} className="portimg1"></img>

                    <div className="portfolio_data">
                      <h3
                        className="portfolio_title"
                        data-aos="fade-down"
                        data-aos-duration="700"
                      >
                        Tenzi Game
                      </h3>
                      <p className="portfolio_desc" data-aos="fade-left">
                        Project made with ReactJS and CSS3, inspired by the dice
                        game "Tenzi". The objective is to roll the dices until
                        all the numbers are the same.
                      </p>
                      <a href="https://tenzi-game-project.vercel.app/">
                        <button className="goto">
                          <span>Go to project</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio_content grid">
                  <div className="portfolioback">
                    <img src={image4} className="portimg1"></img>

                    <div className="portfolio_data">
                      <h3
                        className="portfolio_title"
                        data-aos="fade-down"
                        data-aos-duration="700"
                      >
                        React Calculator
                      </h3>
                      <p className="portfolio_desc" data-aos="fade-left">
                        A fully functional calculator made using ReactJS,
                        including all the basic operations and features.{" "}
                      </p>
                      <a href="https://react-calculator-kappa-ten.vercel.app/">
                        <button className="goto">
                          <span>Go to project</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="coluna2">
              <div className="row3">
                <div className="portfolio_content grid forecast">
                  <div className="portfolioback">
                    <img src={image5} className="portimg1"></img>

                    <div className="portfolio_data">
                      <h3
                        className="portfolio_title"
                        data-aos="fade-down"
                        data-aos-duration="700"
                      >
                        Weather Forecast
                      </h3>
                      <p className="portfolio_desc" data-aos="fade-left">
                        A Weather Forecast application made with ReactJS and
                        OpenWeatherMap API, containing 200.000+ cities,
                        temperature, wind speed, humidity and more!{" "}
                      </p>
                      <a href="https://react-weather-report.vercel.app/">
                        <button className="goto">
                          <span>Go to project</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}