import {
  IconDefinition,
  faCube,
  faGlobe,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CardProps = {
  icon: IconDefinition;
  title: string;
};

function Card({ icon, title }: CardProps) {
  return (
    <div className="relative flex flex-col justify-center items-center gap-4 bg-primary-ori/10 rounded w-52 h-52">
      <FontAwesomeIcon icon={icon} className="h-14" />
      <span className="font-bold">{title}</span>
      <hr className="top-0 left-0 absolute x-rule" />
    </div>
  );
}

function AboutSection() {
  return (
    <section className="mx-auto py-36 max-w-5xl">
      <article className="flex flex-col gap-16 text-center">
        <h2 className="font-bold text-3xl">
          A one-stop shop for local retailers
        </h2>
        <p>
          Xari is a B2B e-commerce app that allows traditional proximity stores
          to order any consumer goods they sell and get delivered within a few
          hours. Xari also provides different types of financial services to
          their B2B customers thanks to a payment institution license obtained
          from the Central Bank of Morocco.
        </p>
        <div className="flex flex-row justify-between gap-12">
          <Card icon={faGlobe} title="7 Countries" />
          <Card icon={faUser} title="+300 Employees" />
          <Card icon={faCube} title="+3 000 Products" />
          <Card icon={faUser} title="+100 000 Clients" />
        </div>
      </article>
    </section>
  );
}

export default AboutSection;
