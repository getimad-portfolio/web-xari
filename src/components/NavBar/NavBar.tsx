import "./NavBar.css";
import GetimadLogo from "../GetimadLogo";

function NavBar() {
  return (
    <nav className="top-0 z-40 fixed backdrop-blur-md w-full">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-row justify-between items-center h-16">
          <a
            className="relative flex items-center gap-2"
            href="https://getimad.me/"
          >
            <GetimadLogo className="h-8" color="white" />
            <span className="logo-text">getimad.me</span>
            <div className="logo-underline"></div>
          </a>
          <ul className="flex flex-row gap-10">
            <li>
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="nav-link" href="#news">
                News & Media
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="x-rule" />
    </nav>
  );
}

export default NavBar;
