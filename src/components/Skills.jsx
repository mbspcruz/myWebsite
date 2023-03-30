import { skills } from "../constant";

const SkillCard = ({ id, name, language, icon }) => (
  <div className="h-full flex flex-col justify-center items-center">
    <div className="bg-[#CAD7D8] rounded-md p-6 md:w-full w-2/3 shadow-lg font-nunito h-full">
      <h3 className="font-bold text-lg mb-4 text-[#455c5e]">{name}</h3>
      <ul>
        {language.map((skill, index) => (
          <li key={index} className="text-sm flex items-center mb-2">
            {icon[index] && (
              <img src={icon[index]} alt={skill} className="mr-2 h-8 w-8 " />
            )}
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Skills() {
  return (
    <div className="lg:mt-72 pb-10 mb-20">
      <h2 className="font-bold text-4xl text-white">Skills</h2>
      <ul className="grid grid-flow-row lg:grid-cols-4 py-8 gap-8 mt-10">
        {skills.map((skill, index) => (
          <li key={skill.id} className="h-full">
            <SkillCard key={skill.id} index={index} {...skill} />
          </li>
        ))}
      </ul>
    </div>
  );
}
