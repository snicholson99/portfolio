import styles from "./Homepage.module.scss";
import { calculateCodingExp } from "../../utils";
import AvatarWithScene from "../../components/AvatarWithScene";

const Homepage = () => {
  return (
    <>
      <div id="home" className={styles.homepage}>
        <h1>Scott Nicholson</h1>
        <h2>{calculateCodingExp()} years of coding expertise</h2>
        <AvatarWithScene />
      </div>
    </>
  );
};

export default Homepage;
