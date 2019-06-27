import React from 'react';
import ReactVivus from 'react-vivus';
import profileSVG from './profile_outline_black.svg';

const Landing = () => {
  return (
    <div id="landing" className="landing">
      <ReactVivus
        id="foo"
        option={{
          file: profileSVG,
          animTimingFunction: 'SYNC',
          type: 'oneByOne',
          duration: 200,
        }}
        style={{ maxWidth: "100%", maxHeight: "330px", padding: "0 20px" }}
      />

      <div>
        <h1>Scott A. Nicholson</h1>
        <h3>Full Stack Developer</h3>
        <h3>20 years old</h3>
        <h4>1 year of coding expertise</h4>
      </div>
    </div>
  );
}

export default Landing;
