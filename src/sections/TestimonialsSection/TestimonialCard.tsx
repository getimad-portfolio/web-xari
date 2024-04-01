import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Review } from "../../interfaces";

type Props = {
  review: Review;
};

function TestimonialCard({ review }: Props) {
  return (
    <div className="relative flex md:flex-row flex-col items-center gap-10 bg-primary-ori/10 dark:bg-dark-primary-ori/10 p-12 rounded-md">
      <div className="place-items-center grid w-64">
        <FontAwesomeIcon
          icon={faUser}
          className="w-28 h-28 text-primary-ori dark:text-dark-primary-ori"
        />
      </div>
      <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
        <h3 className="font-bold text-3xl text-primary-ori dark:text-dark-primary-ori">
          {review.name}
        </h3>
        <p>{review.review}</p>
        <div className="flex gap-1">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="w-5 h-5 text-yellow-500"
              />
            ))}
        </div>
      </div>
      <hr className="top-0 left-0 absolute x-rule" />
    </div>
  );
}

export default TestimonialCard;
