import { Link } from "react-router-dom";
import "./style.css";

export const Homepage = () => {
  return (
    <div id="homepage" className="page">
      <div
        id="homepage-bg-image"
        style={{
          backgroundImage: `url(/assets/homepage/bass_light_2.jpg)`,
        }}
      ></div>
      <h1>Scott Nicholson</h1>
      <h2>Web Developer</h2>
      <div id="homepage-links">
        <Link to="/about-me" className="homepage-link">
          About Me
        </Link>
        <Link to="/projects" className="homepage-link">
          Projects
        </Link>
        {/* <Link to="/more" className="homepage-link">
          More
        </Link> */}
      </div>
    </div>
  );
};
