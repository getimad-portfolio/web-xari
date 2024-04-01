import "./HomeSection.css";
import img1 from "../../assets/images/img-1-white.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";

function HomeSection() {
  return (
    <section
      className="mx-auto w-11/12 md:w-10/12 2xl:w-4/5 max-w-7xl md:h-screen"
      id="home"
    >
      <div className="relative flex md:flex-row flex-col items-center gap-24 pt-24 md:pt-0 h-full">
        <div className="max-w-[700px]">
          <p className="mb-12 font-bold text-5xl">
            <span className="text-7xl text-primary-ori dark:text-dark-primary-ori">
              X
            </span>
            ari puts the power of <br /> e-commerce and FinTech in the hands of
            retailers.
          </p>
          <div className="flex flex-row items-center gap-3">
            <a className="btn" href="">
              <FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
              Google Play
            </a>
            <div className="bg-primary-ori/10 dark:bg-dark-primary-ori/50 rounded-full w-1 h-5"></div>
            <a className="btn" href="">
              <FontAwesomeIcon icon={faApple} className="w-6 h-6" />
              Apple Store
            </a>
          </div>
        </div>
        <div className="md:right-0 md:bottom-0 md:absolute">
          <img className="w-80" src={img1} alt="" />
        </div>
        <hr className="bottom-0 absolute x-rule" />
      </div>
    </section>
  );
}

export default HomeSection;
