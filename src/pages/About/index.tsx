import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faSailboat,
  faStar,
  faUserGraduate,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUserGraduate} />
          <p>
            Graduated the first ever{" "}
            <a
              href="https://schoolofcode.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              School of Code bootcamp
            </a>{" "}
            aged 18
          </p>
        </li>
        <li>
          <FontAwesomeIcon icon={faStar} />
          <p>
            Shortlisted for "Graduate Developer of the Year" at the 2018 Silicon
            Canal Tech Awards and "Developer of the Year" in 2019
          </p>
        </li>
        <li>
          <FontAwesomeIcon icon={faPersonChalkboard} />
          <p>
            Held numerous talks to upcoming developers about my experience and
            good coding practices
          </p>
        </li>
        <li>
          <FontAwesomeIcon icon={faPeopleGroup} />
          <p>
            Proud mentor to 3 talented School of Code graduates, who've since
            gone on to make their mark in the tech world
          </p>
        </li>
        <li>
          <FontAwesomeIcon icon={faSailboat} />
          <p>
            Outside of coding, I'm passionate about sailing, bouldering, and
            playing guitar
          </p>
        </li>
      </ul>
      <img src="/assets/sailing.jpg" alt="sailing" />
    </div>
  );
};

export default About;
