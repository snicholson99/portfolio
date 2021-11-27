import ReactVivus from 'react-vivus';
import { stencils } from '../../../utils';

import './style.css';

const Landing = () => {
  
  const determineStencil = () => {
    let selectedStencil = stencils[Date.now() % stencils.length];
    
    const selectedStencilURLParam = JSON.parse(new URLSearchParams(document.location.search).get("stencil"));
    if (selectedStencilURLParam === "guitar") selectedStencil = "assets/telecaster.svg";
    if (selectedStencilURLParam === "shoe") selectedStencil = "assets/scarpa_vapour_v.svg";
    if (selectedStencilURLParam === "sailing1") selectedStencil = "assets/bassenthwaite_sailing.svg";
    if (selectedStencilURLParam === "sailing2") selectedStencil = "assets/chasewater_sailing.svg";
    if (selectedStencilURLParam === "sunset") selectedStencil = "assets/chasewater_sunset.svg";
    if (selectedStencilURLParam === "lake") selectedStencil = "assets/bassenthwaite_lake.svg";
    if (selectedStencilURLParam === "dog") selectedStencil = "assets/george.svg";
    return selectedStencil;
  }

  return (
    <div id="landing" className="page-section">
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