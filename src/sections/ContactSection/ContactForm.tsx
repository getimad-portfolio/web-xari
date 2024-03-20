import {
  faArrowAltCircleRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SubmitHandler, useForm } from "react-hook-form";

type FormInput = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-6 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative">
        <label className="block mb-2 font-bold text-primary-ori" htmlFor="name">
          Name
        </label>
        <input
          className="bg-primary-ori/10 px-3 rounded-md w-full h-12 outline-none focus:ring-1 focus:ring-primary-ori"
          {...register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name?.type === "required" && (
          <p className="top-0 right-0 absolute text-red-500" role="alert">
            Name is required
          </p>
        )}
      </div>
      <div className="relative">
        <label
          className="block mb-2 font-bold text-primary-ori"
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          className="bg-primary-ori/10 px-3 rounded-md w-full h-12 outline-none focus:ring-1 focus:ring-primary-ori"
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === "required" && (
          <p className="top-0 right-0 absolute text-red-500" role="alert">
            E-mail is required
          </p>
        )}
      </div>
      <div className="relative">
        <label className="block mb-2 font-bold text-primary-ori" htmlFor="">
          Message
        </label>
        <textarea
          className="bg-primary-ori/10 p-3 rounded-md w-full h-24 min-h-24 max-h-36 outline-none focus:ring-1 focus:ring-primary-ori"
          {...register("message", { required: true })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message?.type === "required" && (
          <p className="top-0 right-0 absolute text-red-500" role="alert">
            Message is required
          </p>
        )}
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
