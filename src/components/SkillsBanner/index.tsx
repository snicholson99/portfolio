import { Tooltip } from "react-tooltip";

import styles from "./SkillsBanner.module.scss";

const SKILLS_DATA = [
  {
    name: "HTML 5",
    img: "/assets/skills/html_logo.png",
    type: "development",
    tooltip: "The standard language for creating and structuring web pages.",
  },
  {
    name: "CSS 3",
    img: "/assets/skills/css_logo.png",
    type: "development",
    tooltip: "A stylesheet language used to design and style web pages.",
  },
  {
    name: "JavaScript",
    img: "/assets/skills/js_logo.png",
    type: "development",
    tooltip:
      "A versatile programming language for interactive web development.",
  },
  {
    name: "TypeScript",
    img: "/assets/skills/typescript_logo.svg",
    type: "development",
    tooltip:
      "A superset of JavaScript that adds static typing for better scalability.",
  },
  {
    name: "React.js",
    img: "/assets/skills/react_logo.svg",
    type: "development",
    tooltip:
      "A JavaScript library for building fast and interactive user interfaces.",
  },
  {
    name: "Sass",
    img: "/assets/skills/sass_logo.svg",
    type: "development",
    tooltip:
      "A CSS preprocessor that extends CSS with variables, mixins, and more.",
  },
  {
    name: "Regex",
    img: "/assets/skills/regex_logo.png",
    type: "development",
    tooltip: "A sequence of characters for pattern matching in text.",
  },
  {
    name: "Three.js",
    img: "/assets/skills/threejs_logo.png",
    type: "development",
    tooltip:
      "A JavaScript library for creating 3D graphics in the browser using WebGL",
  },
  {
    name: "Git",
    img: "/assets/skills/git_logo.png",
    type: "development",
    tooltip: "A distributed version control system for tracking code changes.",
  },
  {
    name: "Github",
    img: "/assets/skills/github_logo.svg",
    type: "development",
    tooltip: "A platform for hosting and collaborating on Git repositories.",
  },
  {
    name: "Jasmine",
    img: "/assets/skills/jasmine_logo.png",
    type: "testing",
    tooltip:
      "A testing framework for writing and running JavaScript unit tests.",
  },
  {
    name: "Datadog",
    img: "/assets/skills/datadog_logo.png",
    type: "testing",
    tooltip: "A monitoring and security platform for cloud applications.",
  },
  {
    name: "Figma",
    img: "/assets/skills/figma_logo.svg",
    type: "software",
    tooltip:
      "A collaborative design tool for UI/UX prototyping and wireframing.",
  },
  {
    name: "Airtable",
    img: "/assets/skills/airtable_logo.png",
    type: "software",
    tooltip:
      "A flexible database tool that combines spreadsheets with database features.",
  },
  {
    name: "Zapier",
    img: "/assets/skills/zapier_logo.png",
    type: "software",
    tooltip:
      "An automation tool for connecting apps and workflows without coding.",
  },
  {
    name: "Asana",
    img: "/assets/skills/asana_logo.svg",
    type: "software",
    tooltip:
      "A project management tool for team collaboration and task tracking.",
  },
];

const SkillsBanner = () => {
  return (
    <ul id="skills" className={styles.skillsBanner}>
      {SKILLS_DATA.map((skill, i) => {
        const id = `skill-${skill.name
          .replace(" ", "-")
          .replace(".", "-")
          .toLowerCase()}`;
        if (!id) return null;
        return (
          <li key={i} id={id} className={styles.skill}>
            {skill.img && <img src={skill.img} alt="" />}
            <div className={styles.skillText}>
              <p>{skill.name}</p>
              <p>{skill.type}</p>
            </div>
            <Tooltip
              anchorSelect={`#${id}`}
              content={skill.tooltip}
              delayShow={200}
              style={{
                backgroundColor: "#c3c3c3",
                color: "#0f0f0f",
                width: "fit-content",
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default SkillsBanner;
