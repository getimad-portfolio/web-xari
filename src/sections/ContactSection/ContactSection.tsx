import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="mx-auto py-24 w-10/12 md:w-10/12 2xl:w-4/5 max-w-7xl">
      <div className="flex md:flex-row flex-col gap-12">
        <div className="md:w-2/3">
          <h2 className="mb-3 font-bold text-5xl">Contact</h2>
          <p className="font-bold text-3xl text-primary-ori">
            Send us a message!
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
