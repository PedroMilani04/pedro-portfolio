import "../css/Portfolio.css"

export default function Portfolio() {
    return (
        <div className="portfoliocontainer">
            <div className="aboutme">Portfolio</div>
            <div className="intro">My works</div>

            <div className="portfolio_container container">
                <div>
                    <div className="portfolio_content grid">
                        <img src="https://data.terabox.com/thumbnail/82153b596ee7c31cdd2e85aa69b3c662?fid=4401413037865-250528-124596343550505&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-SefCod5gIh3WbfIsMWr2bdRo0sQ%3d&expires=8h&chkbd=0&chkv=0&dp-logid=10203261578039608&dp-callid=0&time=1671066000&size=c1920_u1080&quality=90&vuk=4401413037865&ft=image&autopolicy=1" className="portimg1"></img>

                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Destination</h3>
                            <p className="portfolio_desc">A simple "Trip Catalog" Project using DOM, showing various destinations around the world. Made specially for HTML5 and CSS3 training.</p>
                            <button className="goto"><span>Go to project</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}