import { infos } from "../../../public/images/info";
import ExperienceCard from "../components/experience";
const WorkExperienceTimeline = () => (
  <div className="max-w-4xl mx-auto">
    <h2 className="flex justify-center font-bold text-4xl font-mono w-full mb-20 mt-10">
      Work Experience
    </h2>
    <div className="relative">
      {infos.Experiences.map((exp, idx) => (
        <ExperienceCard
          key={idx}
          role={exp.role}
          company={exp.company}
          date={exp.date}
          description={exp.description}
        />
      ))}
      {/* <div className="absolute top-0 bottom-0 left-4 md:left-10 w-1 bg-gray-300"></div> */}
    </div>
  </div>
);
export default WorkExperienceTimeline;
