import { faLink, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CardProps = {
  name: string;
  role: string;
};

function CardTeamSection({ name, role }: CardProps) {
  return (
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
  );
}

function TeamSection() {
  const team: { name: string; role: string }[] = [
    { name: "Imad Ez-zahi", role: "CEO" },
    { name: "Amal Ez-zahi", role: "COO" },
    { name: "John Smeth", role: "CSO" },
    { name: "Odd Rgr", role: "CTO" },
    { name: "Even Zhr", role: "CFO" },
    { name: "Adam Tech", role: "CTO" },
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
