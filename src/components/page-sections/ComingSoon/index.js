import Particles from "react-tsparticles";
import './style.css';
import { particlesOptions } from "./particlesOptions";

const ComingSoon = () => (
  <div id="coming-soon" className="page-section">
    <Particles
      id="tsparticles"
      options={particlesOptions}
    />
    <div id="coming-soon-text-container">
      <p>Further content coming soon...</p>
      <p>Why not check out <a href="https://github.com/snicholson99" target="_blank" rel="noreferrer">my GitHub profile</a>?</p>
    </div>
  </div>
);

export default ComingSoon;