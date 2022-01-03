import LinkIcon from '@mui/icons-material/Link';

import './style.css';

const Highlights = () => (
  <div id="highlights" className="page-section">
    <h3 className="page-heading">Highlights</h3>
    <div id="highlights-list">
      <a href="https://downtowninbusiness.com/silicon-canal-tech-awards-shortlist-announcement/" target="_blank" rel="noopener noreferrer" className="highlight">
        <img className="highlight-img" src="/assets/highlights/tech_awards_leaflet.jpg" alt="Tech Awards 2019" />
        <p className="highlight-text">Shortlisted for Developer &amp; Graduate Developer of the Year<br/>(Silicon Canal Tech Awards 2019 and 2018 respectively)</p>
        <LinkIcon className="highlight-link-icon" />
      </a>
      <a href="https://youtu.be/WsIB4y9nbIg" target="_blank" rel="noopener noreferrer" className="highlight">
        <img className="highlight-img" src="/assets/highlights/demo_day_project.jpg" alt="School of Code Demo Day" />
        <p className="highlight-text">Managed and presented a team project to an audience of 100+ employers, created within 4 weeks</p>
        <LinkIcon className="highlight-link-icon" />
      </a>
      <div className="highlight">
        <img className="highlight-img object-fit-contain" src="/assets/highlights/soc_logo.png" alt="School of Code Logo" />
        <p className="highlight-text">Mentor to three School of Code bootcampers... and counting!</p>
      </div>
    </div>
  </div>

);

export default Highlights;