import styles from "./Projects.module.scss";

const PROJECTS_DATA = [
  {
    name: "Workmate",
    description: "A React notes-style project to improve my daily workflow.",
    thumbnailSrc: "/assets/projects/workmate_thumbnail.png",
    hostedLink: "https://inspiring-almeida-64543a.netlify.app/",
    githubLink: "https://github.com/snicholson99/workmate",
  },
  {
    name: "CSS Outdoor Portfolio",
    description:
      "An alternative outdoorsy portfolio website, with graphics created using HTML & CSS.",
    thumbnailSrc: "/assets/projects/css-outdoor-portfolio_thumbnail.png",
    hostedLink: "https://snicholson99.github.io/outdoor-portfolio/",
    githubLink: "https://github.com/snicholson99/outdoor-portfolio",
  },
  {
    name: "CD Graphics Portfolio",
    description: "A portfolio for a friend to promote their graphic design.",
    thumbnailSrc: "/assets/projects/cd-graphics-portfolio_thumbnail.png",
    hostedLink: "https://snicholson99.github.io/cd-graphics/",
    githubLink: "https://github.com/snicholson99/cd-graphics",
  },
  {
    name: "Danksboard",
    description:
      "A joke soundboard, containing sound clips from my climbing friend.",
    thumbnailSrc: "/assets/projects/danksboard_thumbnail.png",
    hostedLink: "https://gracious-yonath-480b08.netlify.app/",
    githubLink: "https://github.com/snicholson99/danksboard",
  },
  {
    name: "Rock, Paper, Scissors Game",
    description:
      "A game of rock paper scissors created using React best practices.",
    thumbnailSrc: "/assets/projects/rock-paper-scissors_thumbnail.png",
    hostedLink: "https://snicholson99.github.io/rock-paper-scissors/",
    githubLink: "https://github.com/snicholson99/rock-paper-scissors",
  },
  {
    name: "It Worked On My Machine",
    description:
      "A joke counter which stores all of your fails in local storage.",
    thumbnailSrc: "/assets/projects/fail-counter_thumbnail.png",
    hostedLink: "https://snicholson99.github.io/fail-counter/",
    githubLink: "https://github.com/snicholson99/fail-counter",
  },
];

const Projects = () => {
  return (
    <div id="projects" className={styles.projects}>
      <div className={styles["project-cards"]}>
        {PROJECTS_DATA.map((project, index) => (
          <a
            key={index}
            className={styles["project-card"]}
            href={project.hostedLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src={project.thumbnailSrc} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
