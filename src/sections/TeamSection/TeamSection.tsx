import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollEffectContainer } from "../../effects";
import Man1 from "../../assets/images/people/man-1.webp";
import Man2 from "../../assets/images/people/man-2.webp";
import Man3 from "../../assets/images/people/man-3.webp";
import Woman1 from "../../assets/images/people/woman-1.webp";
import Woman2 from "../../assets/images/people/woman-2.webp";
import Woman3 from "../../assets/images/people/woman-3.webp";

type CardProps = {
  name: string;
  role: string;
  img: string;
};

function CardTeamSection({ name, role, img }: CardProps) {
  return (
    <ScrollEffectContainer>
      <div className="relative place-items-center grid rounded">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-2">
            <img className="w-full h-full" src={img} alt="" />
          </div>
          <div>
            <h4 className="font-bold text-2xl text-primary-ori dark:text-dark-primary-ori">
              {name}
            </h4>
            <span className="font-bold">{role}</span>
          </div>
          <a href="#" className="mt-3">
            <FontAwesomeIcon
              icon={faLink}
              className="w-6 h-6 text-primary-ori/50 dark:text-dark-primary-ori/50 hover:text-primary-ori dark:hover:text-dark-primary-ori transition-all duration-300 cursor-pointer ease-in-out"
            />
          </a>
        </div>
      </div>
    </ScrollEffectContainer>
  );
}

function TeamSection() {
  const team: { name: string; role: string; img: string }[] = [
    { name: "John Doe", role: "Software Engineer", img: Man2 },
    { name: "Jane Smith", role: "Product Manager", img: Woman1 },
    { name: "Robert Johnson", role: "UX Designer", img: Man1 },
    { name: "Emily Davis", role: "Data Scientist", img: Woman2 },
    { name: "Michael Brown", role: "DevOps Engineer", img: Man3 },
    { name: "Sarah Wilson", role: "QA Engineer", img: Woman3 },
  ];

  return (
    <section className="mx-auto py-24 w-11/12 md:w-10/12 2xl:w-4/5 max-w-7xl">
      <div>
        <h3 className="mb-12 font-bold text-3xl text-center">Xari's Team</h3>
        <div className="gap-6 md:gap-12 grid grid-cols-2 md:grid-cols-3 grid-rows-2">
          {team.map((member, index) => (
            <CardTeamSection
              key={index}
              name={member.name}
              role={member.role}
              img={member.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
