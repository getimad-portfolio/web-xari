import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollEffectContainer } from "../../effects";

type NewsMediaCardProps = {
  title: string;
  description: string;
};

function NewsMediaCard({ title, description }: NewsMediaCardProps) {
  return (
    <ScrollEffectContainer>
      <a
        className="flex flex-col justify-center items-center gap-3 text-center cursor-pointer group"
        href="#"
      >
        <div>
          <FontAwesomeIcon
            icon={faNewspaper}
            className="group-hover:scale-105 w-20 h-20 transition duration-300 scale-100"
          />
        </div>
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-primary-ori">{description}</p>
        <span className="group-hover:text-primary-ori flex items-center gap-1 font-bold text-primary-ori/50 text-sm underline transition duration-300 ease-in-out">
          Read More
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            className="ml-2 w-4 h-4"
          />
        </span>
      </a>
    </ScrollEffectContainer>
  );
}

export default NewsMediaCard;
