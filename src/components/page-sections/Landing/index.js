import ReactVivus from 'react-vivus';

import './style.css';

const Landing = () => {
  
  const determineStencil = () => {
    // let selectedStencil = Math.random() > 0.5 ? "assets/telecaster_stencil.svg" : "assets/scarpa_vapour_v_stencil.svg";
    let selectedStencil = "assets/scarpa_vapour_v_stencil.svg";
    const selectedStencilURLParam = JSON.parse(new URLSearchParams(document.location.search).get("stencil"));
    if (selectedStencilURLParam === "guitar") selectedStencil = "assets/telecaster_stencil.svg";
    // if (selectedStencilURLParam === "shoe") selectedStencil = "assets/scarpa_vapour_v_stencil.svg";
    return selectedStencil;
  }

  return (
    <div id="landing" className="page-section">
        <div id="landing-text-container">
          <h1>Scott A. Nicholson</h1>
          <h2>Front-End Developer</h2>
        </div>
        <ReactVivus
          id="landing-stencil"
          option={{
            file: determineStencil(),
            type: 'oneByOne',
            duration: 1000,
          }}
        />
    </div>
  );
}

export default Landing;