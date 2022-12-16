import "../css/Portfolio.css"

import "swiper/css";
import "swiper/css/navigation";




export default function Portfolio() {
    return (
        <div className="portfoliocontainer">

            <div className="aboutme">Portfolio</div>
            <div className="intro">My works</div>

            <div className="portfolio_container container">
                <div className="coluna">
                    <div className="row1">
                        <div className="portfolio_content grid">
                            <img src="https://data.terabox.com/thumbnail/82153b596ee7c31cdd2e85aa69b3c662?fid=4401413037865-250528-124596343550505&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-bgKa86X65fdFUh9JBOFLxyfeF0w%3d&expires=8h&chkbd=0&chkv=0&dp-logid=52526896686572885&dp-callid=0&time=1671224400&size=c1920_u1080&quality=90&vuk=4401413037865&ft=image&autopolicy=1" className="portimg1"></img>

                            <div className="portfolio_data">
                                <h3 className="portfolio_title">Destination</h3>
                                <p className="portfolio_desc">A simple "Catalog" Project using HTML5/CSS3/JS, showing various destinations around the world. Made specially for HTML5 and CSS3 training.</p>
                                <button className="goto"><span>Go to project</span></button>
                            </div>
                        </div>
                        <div className="portfolio_content grid">
                            <img src="https://data.terabox.com/thumbnail/d2b7b070911023c6120f60d7e02a7c69?fid=4401413037865-250528-1065315477914809&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-k%2bOvhKjeNkviMFmz6PmWgi9rVL8%3d&expires=8h&chkbd=0&chkv=0&dp-logid=52526896686572885&dp-callid=0&time=1671224400&size=c1920_u1080&quality=90&vuk=4401413037865&ft=image&autopolicy=1" className="portimg1"></img>

                            <div className="portfolio_data">
                                <h3 className="portfolio_title">Web Pokédex</h3>
                                <p className="portfolio_desc">A web project using HTML5, CSS3 and JavaScript to create a stylized pokédex based on the game franchise "Pokémon".</p>
                                <button className="goto"><span>Go to project</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="portfolio_content grid">
                            <img src="https://data.terabox.com/thumbnail/dc9e827f156c74961ea5fe549251cd57?fid=4401413037865-250528-1115780078137063&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-lj8ckywjJW7OYmgt4xUK2y5r9fk%3d&expires=8h&chkbd=0&chkv=0&dp-logid=52526896686572885&dp-callid=0&time=1671224400&size=c1920_u1080&quality=90&vuk=4401413037865&ft=image&autopolicy=1" className="portimg1"></img>

                            <div className="portfolio_data">
                                <h3 className="portfolio_title">Tenzi Game</h3>
                                <p className="portfolio_desc">Project made with ReactJS and CSS3, inspired by the dice game "Tenzi". The objective is to roll the dices until every number is the same.</p>
                                <button className="goto"><span>Go to project</span></button>
                            </div>
                        </div>
                        <div className="portfolio_content grid">
                            <img src="https://data.terabox.com/thumbnail/c29c38b6a444f200d3032909774b2a0a?fid=4401413037865-250528-194655282546607&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-dQCxiShoSsx0QU62KtA8nufVEtg%3d&expires=8h&chkbd=0&chkv=0&dp-logid=52526896686572885&dp-callid=0&time=1671224400&size=c1920_u1080&quality=90&vuk=4401413037865&ft=image&autopolicy=1" className="portimg1"></img>

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