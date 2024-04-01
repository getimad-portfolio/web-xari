import { useState } from "react";
import ContactForm from "./ContactForm";
import { ScrollEffectContainer } from "../../effects";

function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <ScrollEffectContainer>
      <section
        className="mx-auto py-24 w-10/12 md:w-10/12 2xl:w-4/5 max-w-7xl"
        id="contact"
      >
        <div className="flex md:flex-row flex-col gap-12">
          <div className="md:w-2/3">
            <h2 className="mb-3 font-bold text-5xl">Contact</h2>
            <p className="mb-3 font-bold text-3xl text-primary-ori dark:text-dark-primary-ori">
              Send us a message!
            </p>
            {isSubmitted && (
              <p className="text-green-500">
                Thank you for your message! We will get back to you as soon as
                possible.
              </p>
            )}
          </div>
          <ContactForm
            setIsSubmitted={(isSubmitted: boolean) =>
              setIsSubmitted(isSubmitted)
            }
          />
        </div>
      </section>
    </ScrollEffectContainer>
  );
}

export default ContactSection;
