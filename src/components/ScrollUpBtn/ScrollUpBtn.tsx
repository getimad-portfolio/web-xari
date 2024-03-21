import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      {showScrollUpBtn && (
        <motion.button
          className="right-5 bottom-5 fixed place-items-center grid bg-white/10 rounded-full w-10 h-10"
          onClick={handleScrollUp}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollUpBtn;
