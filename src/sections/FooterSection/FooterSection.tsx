import {
  IconDefinition,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterSection() {
  const links: { icon: IconDefinition; href: string }[] = [
    { icon: faFacebook, href: "https://facebook.com/" },
    { icon: faLinkedin, href: "https://linkedin.com/" },
    { icon: faInstagram, href: "https://instagram.com/" },
    { icon: faTwitter, href: "https://twitter.com/" },
    { icon: faYoutube, href: "https://youtube.com/" },
  ];

  return (
    <section className="mx-auto pt-24 max-w-5xl">
      <div className="relative py-12">
        <hr className="top-0 left-0 absolute x-rule" />
        <hr className="right-0 bottom-0 absolute x-rule" />
        <nav>
          <h3 className="mb-6 font-bold text-3xl text-center">
            Follow us on our social networks
          </h3>
          <ul className="flex justify-center">
            {links.map((link, index) => (
              <li key={index} className="inline-block mx-4">
                <a href={link.href} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={link.icon}
                    size="2x"
                    className="text-primary-ori hover:text-white hover:scale-110 transition-all duration-300"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <a className="place-items-center grid my-7" href="https://getimad.me">
        <span className="font-bold text-primary-ori text-xs tracking-wider">
          Designed & Built by getimad.me
        </span>
        <span className="text-xs tracking-wider">
          &copy; 2024 All rights reserved
        </span>
      </a>
    </section>
  );
}

export default FooterSection;
