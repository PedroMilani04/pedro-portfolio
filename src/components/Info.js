import "../css/Info.css";
import img1 from "../img/img1.jpg";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Info() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <BrowserRouter>
      <div className="info" id="homepage">
        <div className="info1">
          <div className="infopedros">
            <div className="name" data-aos="fade-down" data-aos-duration="1000">
              Hi! I'm Pedro
            </div>
            <div
              className="title"
              data-aos="fade-right"
              data-aos-duration="1700"
            >
              Fullstack Developer and AWS Cloud Practicioner
            </div>
            <div
              className="about"
              data-aos="fade-right"
              data-aos-duration="1700"
            >
              Experience in ReactJS and Amazon Web Services. Always in seek of
              knowledge, experiences and opportunities to aggregate!
            </div>

            <div className="contactsbutoes">
              <a href="https://www.linkedin.com/in/pedromilanidev/">
                <button
                  className="linkbtn"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                >
                  <span>
                    {" "}
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z"
                      />
                    </svg>
                    LinkedIn
                  </span>
                </button>
              </a>
              <a href="https://github.com/PedroMilani04">
                <button
                  className="gitbtn"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                >
                  <span>
                    {" "}
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1"
                      />
                    </svg>
                    GitHub
                  </span>
                </button>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="img" data-aos="fade-left" data-aos-duration="1700">
          {" "}
          <img src={img1} className="imgportas" />{" "}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Info;
