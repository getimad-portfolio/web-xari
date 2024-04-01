import { ReactNode } from "react";
import img2 from "../../assets/images/img-2-white.webp";

import {
  IconDefinition,
  faCube,
  faGlobe,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollEffectContainer } from "../../effects";

type CardProps = {
  icon: IconDefinition;
  title: string;
};

type ParagraphProps = {
  title: string;
  children: ReactNode;
};

function Card({ icon, title }: CardProps) {
  return (
    <ScrollEffectContainer>
      <div className="relative flex flex-col justify-center items-center gap-4 bg-primary-ori/10 dark:bg-dark-primary-ori/10 rounded w-52 h-52">
        <FontAwesomeIcon icon={icon} className="h-14" />
        <span className="font-bold">{title}</span>
        <hr className="top-0 left-0 absolute x-rule" />
      </div>
    </ScrollEffectContainer>
  );
}

function Paragraph({ title, children }: ParagraphProps) {
  return (
    <ScrollEffectContainer>
      <div>
        <h3 className="mb-2 font-bold text-2xl">{title}</h3>
        <p className="text-primary-ori dark:text-dark-primary-ori">
          {children}
        </p>
      </div>
    </ScrollEffectContainer>
  );
}

function AboutSection() {
  return (
    <section
      className="mx-auto py-24 w-10/12 md:w-10/12 2xl:w-4/5 max-w-7xl"
      id="about"
    >
      <ScrollEffectContainer>
        <article className="flex flex-col gap-16 mb-32 text-center">
          <h2 className="font-bold text-3xl">
            A one-stop shop for local retailers
          </h2>
          <p>
            Xari is a B2B e-commerce app that allows traditional proximity
            stores to order any consumer goods they sell and get delivered
            within a few hours. Xari also provides different types of financial
            services to their B2B customers thanks to a payment institution
            license obtained from the Central Bank of Morocco.
          </p>
          <div className="flex md:flex-row flex-col justify-between items-center gap-6">
            <Card icon={faGlobe} title="7 Countries" />
            <Card icon={faUser} title="+300 Employees" />
            <Card icon={faCube} title="+3 000 Products" />
            <Card icon={faUser} title="+100 000 Clients" />
          </div>
        </article>
      </ScrollEffectContainer>
      <article className="relative flex md:flex-row flex-col justify-between gap-12">
        <div className="flex flex-col gap-9 mx-auto max-w-[500px] text-center md:text-left">
          <Paragraph title="A digital distribution channel">
            Xari's app allows retailers to order a wide range of consumer goods
            at competitive prices while benefiting from quick delivery.
          </Paragraph>
          <Paragraph title="Embedded financial services">
            Within a few clicks, Xari's customers can benefit from financial
            services like payments, micro-insurance...
          </Paragraph>
          <Paragraph title="A direct communication channel">
            Thanks to its different digital tools, Xari established a direct
            communication channel with traditional proximity stores.
          </Paragraph>
        </div>
        <div>
          <img className="mx-auto w-80" src={img2} alt="" />
        </div>
        <hr className="right-0 bottom-0 absolute x-rule" />
      </article>
    </section>
  );
}

export default AboutSection;
