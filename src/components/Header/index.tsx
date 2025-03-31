import styles from "./Header.module.scss";
import { scrollToWithOffset } from "../../utils";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-inner"]}>
        <img
          className={styles["header-logo"]}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          src="/assets/sn-outline.svg"
          alt="logo"
        />
        <nav className={styles.nav}>
          <span onClick={() => scrollToWithOffset("#about")}>About</span>
          <span onClick={() => scrollToWithOffset("#projects")}>Projects</span>
          <span onClick={() => scrollToWithOffset("#skills")}>Skills</span>
          <span onClick={() => scrollToWithOffset("#contact")}>Contact</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
