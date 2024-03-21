import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { ScrollEffectContainer } from "../../effects";

function PromoVideoSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <ScrollEffectContainer>
      <section className="mx-auto py-24 w-11/12 md:w-10/12 2xl:w-4/5 max-w-7xl">
        <div className="">
          <h2 className="mb-12 font-bold text-3xl text-center">
            Discover our promotional video
          </h2>
          <div className="place-items-center grid bg-primary-ori/10 rounded-xl w-full h-[500px]">
            <button className="mx-auto" onClick={() => setShowVideo(true)}>
              <FontAwesomeIcon
                icon={faPlay}
                className="opacity-50 hover:opacity-100 w-24 h-24 text-primary-ori transition duration-300 ease-in-out"
              />
            </button>
          </div>
          {showVideo && (
            <div className="top-0 left-0 z-50 fixed">
              <iframe
                className="top-1/2 right-1/2 z-10 absolute -translate-y-1/2 translate-x-1/2"
                width="1024"
                height="576"
                src="https://www.youtube.com/embed/_f2h9MT89-8?si=miIsfGps71Kcq4Pa"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>

              <div
                className="bg-primary-ori/10 backdrop-blur-md w-screen h-screen"
                onClick={() => setShowVideo(false)}
              ></div>
            </div>
          )}
        </div>
      </section>
    </ScrollEffectContainer>
  );
}

export default PromoVideoSection;
