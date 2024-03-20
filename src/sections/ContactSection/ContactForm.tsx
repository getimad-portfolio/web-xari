import {
  faArrowAltCircleRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactForm() {
  return (
    <form className="flex flex-col gap-6 w-full">
      <div>
        <label className="block mb-2 font-bold text-primary-ori" htmlFor="name">
          Name
        </label>
        <input
          className="bg-primary-ori/10 px-3 rounded-md w-full h-12 outline-none focus:ring-1 focus:ring-primary-ori"
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div>
        <label
          className="block mb-2 font-bold text-primary-ori"
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          className="bg-primary-ori/10 px-3 rounded-md w-full h-12 outline-none focus:ring-1 focus:ring-primary-ori"
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div>
        <label className="block mb-2 font-bold text-primary-ori" htmlFor="">
          Message
        </label>
        <textarea
          className="bg-primary-ori/10 p-3 rounded-md w-full h-24 min-h-24 max-h-36 outline-none focus:ring-1 focus:ring-primary-ori"
          id="message"
          name="message"
        />
      </div>
      <div className="flex flex-row justify-between h-12">
        <a
          href="mailto:fake@contact-us.com"
          className="flex flex-row items-center gap-3 font-bold text-primary-ori"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          fake@contact-us.com
        </a>
        <button
          className="flex flex-row justify-center items-center hover:border-primary-ori bg-primary-ori/10 border border-transparent rounded-md w-48 font-bold transition-colors duration-300"
          type="submit"
        >
          Send Message
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-5" />
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
