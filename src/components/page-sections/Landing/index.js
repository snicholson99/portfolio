import { useState, useEffect, useRef } from 'react';
import Vivus from 'vivus';
// import LandscapeIcon from '@mui/icons-material/Landscape';
// import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import SailingIcon from '@mui/icons-material/Sailing';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import WaterIcon from '@mui/icons-material/Water';
// import PetsIcon from '@mui/icons-material/Pets';


import stencils from '../../../stencils.json';

import './style.css';

const Landing = () => {
  const [selectedStencil, setSelectedStencil] = useState(stencils[0].fullPath);
  const svg = useRef();

  useEffect(() => {
    svg.current.replaceChildren();
    new Vivus(svg.current,
      {
        file: selectedStencil,
        type: 'oneByOne',
        duration: 1000,
      },
    null);
  }, [selectedStencil]);

  return (
    <div id="landing" className="page-section">
        <div id="landing-stencil" ref={svg}></div>
        
        <div id="landing-buttons">
          {stencils.map((stencil, i) => (
            <button key={i} onClick={() => setSelectedStencil(stencil.fullPath)}>
              {stencil.icon}
              <p>{stencil.displayName}</p>
            </button>
          ))}
        </div>
    </div>
  );
}

export default Landing;