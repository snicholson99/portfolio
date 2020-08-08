import React from 'react';
import ReactVivus from 'react-vivus';

const Landing = () => {
  const calculateYearsSince = date => {
    const ageDifMs = Date.now() - date;
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <div id="landing" className="landing">
      <ReactVivus
        id="foo"
        option={{
          file: "profile_outline_black.svg",
          animTimingFunction: 'SYNC',
          type: 'oneByOne',
          duration: 200,
        }}
        style={{ maxWidth: "100%", maxHeight: "330px", padding: "0 20px" }}
      />

      <div>
        <h1>Scott A. Nicholson</h1>
        <h3>Software Developer</h3>
        <h3>{calculateYearsSince(new Date('05/11/1999'))} years old</h3>
        <h4>{calculateYearsSince(new Date('09/03/2017'))} years of coding expertise</h4>
      </div>
    </div>
  );
}

export default Landing;
