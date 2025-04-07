import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles["contact-inner"]}>
        <ul>
          <li>
            <a
              href="https://github.com/snicholson99"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              <p>Check out my projects</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/scott-nicholson"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <p>Connect with me</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/scott_n99"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
              <p>See my social side</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
