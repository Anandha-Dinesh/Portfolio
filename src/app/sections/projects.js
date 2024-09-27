import ProjectTile from "../components/project_tile";
import { infos } from "../../../public/images/info";
const Projects = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center font-bold text-4xl font-mono w-full mb-20">
        Projects
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row">
        {infos.projects.map((project, index) => {
          return (
            <ProjectTile
              key={index}
              title={project.title}
              description={project.description}
              stack={project.Stack}
              url={project.github}
            />
          );
        })}
        <ProjectTile
          className="text-xl"
          title={"See more on Github"}
          url={infos.social.github}
          description={">"}
        />
      </div>
    </div>
  );
};
export default Projects;
