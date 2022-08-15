import "./style.css";
import projects from "./projects.json";

export const Projects = () => {
  return (
    <div id="projects" className="page">
      <div id="projects-content">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="project"
          >
            <img src={project.thumbnailImage} alt={project.name} />
            <p className="project-name">{project.name}</p>
            <p className="project-description">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
