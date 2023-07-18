import Projects from "../components/Project/Projects";
import { projects } from "../helpers/projectsList";

const Project = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Projects 
              key={index} 
              title={project.title} 
              img={project.img}
              index={index}
               />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Project;
