import "../css/Portfolio.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Portfolio() {
    return (
        <div className="portfoliocontainer">
            <div className="aboutme">Portfolio</div>
            <div className="intro">My works</div>

            <div className="portfolio_container container">
                <div>
                    <div className="portfolio_content grid">
                        <img src="https://data.terabox.com/thumbnail/82153b596ee7c31cdd2e85aa69b3c662?fid=4401413037865-250528-124596343550505&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-LN8Fd9qf%2fkjZmdgZOJmpbWio2zE%3d&expires=8h&chkbd=0&chkv=0&dp-logid=31276212800153418&dp-callid=0&time=1671145200&size=c1920_u1080&quality=90&vuk=4401413037865&ft=image&autopolicy=1" className="portimg1"></img>

                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Destination</h3>
                            <p className="portfolio_desc">A simple "Trip Catalog" Project using DOM, showing various destinations around the world. Made specially for HTML5 and CSS3 training.</p>
                            <button className="goto"><span>Go to project</span></button>
                        </div>
                    </div>
                    <div className="portfolio_content grid">
                        <img src="https://data.terabox.com/thumbnail/d2b7b070911023c6120f60d7e02a7c69?fid=4401413037865-250528-1065315477914809&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-HPu%2f1nt%2bQGgl5%2bw6wUvnS6cL5o4%3d&expires=8h&chkbd=0&chkv=0&dp-logid=31329159802766462&dp-callid=0&time=1671145200&size=c1920_u1080&quality=90&vuk=4401413037865&ft=image&autopolicy=1" className="portimg1"></img>

                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Destination</h3>
                            <p className="portfolio_desc">A simple "Trip Catalog" Project using DOM, showing various destinations around the world. Made specially for HTML5 and CSS3 training.</p>
                            <button className="goto"><span>Go to project</span></button>
                        </div>
                    </div>
                    <div className="portfolio_content grid">
                        <img src="https://data.terabox.com/thumbnail/dc9e827f156c74961ea5fe549251cd57?fid=4401413037865-250528-1115780078137063&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-QFeFW%2bZswSHqc1Wo3y8iOV43GE8%3d&expires=8h&chkbd=0&chkv=0&dp-logid=31329159802766462&dp-callid=0&time=1671145200&size=c1920_u1080&quality=90&vuk=4401413037865&ft=image&autopolicy=1" className="portimg1"></img>

                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Destination</h3>
                            <p className="portfolio_desc">A simple "Trip Catalog" Project using DOM, showing various destinations around the world. Made specially for HTML5 and CSS3 training.</p>
                            <button className="goto"><span>Go to project</span></button>
                        </div>
                    </div>
                    <div className="portfolio_content grid">
                        <img src="https://data.terabox.com/thumbnail/c29c38b6a444f200d3032909774b2a0a?fid=4401413037865-250528-194655282546607&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-Ks%2flX610rPeLg7S646HeTtbxr78%3d&expires=8h&chkbd=0&chkv=0&dp-logid=31329159802766462&dp-callid=0&time=1671145200&size=c1920_u1080&quality=90&vuk=4401413037865&ft=image&autopolicy=1" className="portimg1"></img>

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