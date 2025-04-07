import { Tooltip } from "react-tooltip";
import skills from "./skills.json";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <ul id="skills" className={styles.skillsBanner}>
      {skills.map((skill, i) => {
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
              opacity={1}
              style={{
                backgroundColor: "#f0f0f0",
                color: "#0f0f0f",
                width: "fit-content",
                maxWidth: "80%",
                textAlign: "center",
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
