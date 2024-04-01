import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollEffectContainer } from "../../effects";

type NewsMediaCardProps = {
  title: string;
  description: string;
  img: string;
};

function NewsMediaCard({ title, description, img }: NewsMediaCardProps) {
  return (
    <ScrollEffectContainer>
      <a
        className="flex flex-col justify-center items-center gap-3 text-center cursor-pointer group"
        href="#"
      >
        <div className="w-56 h-56 rounded-md overflow-hidden group-hover:scale-105 transition duration-300 scale-100">
          <img src={img} alt={title} />
        </div>
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-primary-ori dark:text-dark-primary-ori">
          {description}
        </p>
        <span className="group-hover:text-primary-ori dark:group-hover:text-dark-primary-ori flex items-center gap-1 font-bold text-primary-ori/50 dark:text-dark-primary-ori/50 text-sm underline transition duration-300 ease-in-out">
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
