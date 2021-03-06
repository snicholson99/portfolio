import React from 'react';
import Stepper from '../page-components/Stepper/Stepper.js';

const MyJourney = ({ isVisible }) => (
  <div id="my-journey" className={`my-journey ${isVisible ? "visible": "invisible"}`}>
    <h1>My Journey</h1>

    <Stepper
      headings={[ "School of Code - Graduate", "Medstars Ltd - Web Developer", "Amigo Technology - Front End Web Developer" ]} 
      icons={["soc_logo.png", "ms_logo.png", "amigo_logo.png"]}
      content={[
        "The School of Code Bootcamp is an intensive 16-week course which takes complete novices from the bare basics to full-stack developers through the use of different teaching methods. Having recently completed Sixth Form, I was the youngest member of the first School of Code Bootcamp cohort. During the bootcamp, I proved competent at HTML, CSS and JavaScript, and also React. As I learned to operate in an AGILE working environment, I undertook responsibilities such as Project Manager for a week-long challenge set by Dell EMC. I also led a competitive team project (a group of 4) where we created a School of Code website and presented our proposals to a judging panel and an audience of over 100.",
        "Medstars connects private medical practitioners to patients via an on-line search platform. I was promoted from Junior Web Developer to Web Developer within one year, with particular recognition for task management performance. From the outset I was making live changes to the main website and CMS. I developed the role to include designing wireframes, certifying security checks (including device security throughout the business) and representing the company brand at corporate events. I learned to communicate with non-technical clients (Consultants and GPs/Registrars) to devise and implement mutually beneficial outcomes. Also initiated designing and building private websites for practitioners, to increase income for the company.",
        "Amigo enables global enterprises to innovate like startups through rapid experimentation. Within one month at Amigo, I had independently built 5 demos for new clients, such as EasyJet, TUI and Iberostar. A regular day sees the development of drastic improvements to widely-known client websites, with an emphasis on the speed of the process. Within 3 months at Amigo, I was shortlisted for 'Developer of the Year' at Silicon Canal Tech Awards 2019 - the support from previous and current colleagues was tremendous."
      ]}
    />
  </div>
);

export default MyJourney;
