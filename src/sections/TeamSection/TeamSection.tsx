import { faLink, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollEffectContainer } from "../../effects";

type CardProps = {
  name: string;
  role: string;
};

function CardTeamSection({ name, role }: CardProps) {
  return (
    <ScrollEffectContainer>
      <div className="relative place-items-center grid bg-primary-ori/10 rounded h-64">
        <div className="text-center">
          <div>
            <FontAwesomeIcon icon={faUser} className="w-20 h-20" />
          </div>
          <div>
            <h4 className="font-bold text-2xl text-primary-ori">{name}</h4>
            <span className="font-bold">{role}</span>
          </div>
          <a href="#">
            <FontAwesomeIcon
              icon={faLink}
              className="top-2 right-2 absolute w-6 h-6 text-primary-ori/50 hover:text-primary-ori transition-all duration-300 cursor-pointer ease-in-out"
            />
          </a>
          <hr className="top-0 left-0 absolute x-rule" />
        </div>
      </div>
    </ScrollEffectContainer>
  );
}

function TeamSection() {
  const team: { name: string; role: string }[] = [
    { name: "John Doe", role: "Software Engineer" },
    { name: "Jane Smith", role: "Product Manager" },
    { name: "Robert Johnson", role: "UX Designer" },
    { name: "Emily Davis", role: "Data Scientist" },
    { name: "Michael Brown", role: "DevOps Engineer" },
    { name: "Sarah Wilson", role: "QA Engineer" },
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
