import "./NavBar.css";
import GetimadLogo from "../GetimadLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faNavicon } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const links: { label: string; href: string }[] = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "News & Media", href: "#news" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="top-0 z-40 fixed backdrop-blur-md w-full">
        <div className="mx-auto w-11/12 md:w-10/12 2xl:w-4/5 max-w-7xl">
          <div className="flex flex-row justify-between items-center h-16">
            <a className="font-bold text-xl" href="/">
              <span className="text-3xl text-primary-ori">X</span>ari
            </a>
            <ul className="md:flex flex-row gap-10 hidden">
              {links.map((link) => (
                <li key={link.label}>
                  <a className="nav-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="place-items-center md:hidden grid hover:bg-primary-ori/10 rounded-md w-10 h-10 transition-colors duration-300 ease-in-out"
              onClick={handleMenuClick}
            >
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faClose} className="w-5 h-5" />
              ) : (
                <FontAwesomeIcon icon={faNavicon} className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <hr className="x-rule" />
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.ul
              className={`md:hidden flex flex-col origin-top gap-3 bg-[#250F00] z-40 w-full pl-6 pt-3 items-center fixed top-16 ${
                isMenuOpen ? "flex" : "hidden"
              }`}
              initial={{ opacity: 0, scaleY: 0.9 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0.9 }}
            >
              {links.map((link) => (
                <li key={link.label}>
                  <a className="nav-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
              <hr className="x-rule" />
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
