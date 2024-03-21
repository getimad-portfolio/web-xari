import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";

function ScrollUpBtn() {
  const [showScrollUpBtn, setShowScrollUpBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowScrollUpBtn(false);
      } else {
        setShowScrollUpBtn(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showScrollUpBtn && (
      <button
        className="right-5 bottom-5 fixed place-items-center grid bg-white/10 rounded-full w-10 h-10"
        onClick={handleScrollUp}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    )
  );
}

export default ScrollUpBtn;
