import React from 'react';
import bgImage from "tech_awards.jpg";

const BehindTheCode = () => (
  <div id="behind-the-code" className="btc">
    <h1>Behind The Code<br/>Coming Soon...</h1>
    <div style={{backgroundImage: `url(${bgImage})`, backgroundPosition: "50% 0%"}} />
    {/* <div style={{backgroundImage: `url("/tech_awards.jpg")`, backgroundPosition: "50% 20%"}} /> */}
    {/* <div style={{backgroundImage: `url("/pegs1_instagram.jpg")`, backgroundPosition: "50% 40%"}} />
    <div style={{backgroundImage: `url("/chasewater.jpg")`, backgroundPosition: "50% 20%"}} /> */}
  </div>
);

export default BehindTheCode;
