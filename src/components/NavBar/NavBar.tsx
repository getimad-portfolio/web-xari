import "./NavBar.css";
import GetimadLogo from "../GetimadLogo";

function NavBar() {
  const links: { label: string; href: string }[] = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "News & Media", href: "#news" },
    { label: "Contact", href: "#contact" },
  ];

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
            {links.map((link) => (
              <li key={link.label}>
                <a className="nav-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="x-rule" />
    </nav>
  );
}

export default NavBar;
