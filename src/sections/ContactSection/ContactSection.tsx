import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="mx-auto py-24 max-w-5xl">
      <div className="flex flex-row gap-12">
        <div className="w-2/3">
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
