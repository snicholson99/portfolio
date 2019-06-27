import React, { Component } from 'react';
import PercentageBar from '../PercentageBar';

class Highlights extends Component {

  componentDidMount() {
    const video = document.getElementById("background-video");
    video.playbackRate = 0.8;
  }
  render() {
    const { isVisible } = this.props;
    return (
      // <div id="highlights" className={`info ${isVisible ? "visible" : "invisible"}`}>
      <div id="highlights" className="info">
        <video id="background-video" autoPlay muted loop className="background-video">
          <source src="/blurred_coding.mp4" type="video/mp4" />
          Sorry, your browser does not support HTML5 video.
        </video>
        <div className={`${isVisible ? "visible" : "invisible"}`}>
          <div className="info-highlights">
            <h3>Career Highlights</h3>
            <div className="highlight">
              <i className="fas fa-award highlight-icon"></i>
              <p className="highlight-text">Shortlisted for Graduate Developer of the Year (Silcon Canal Tech Awards 2018)</p>
            </div>
            <div className="highlight">
              <i className="fas fa-users highlight-icon"></i>
              <p className="highlight-text">Managed and presented a team project to an audience of 100+ employers (created within 4 weeks)</p>
            </div>
            <div className="highlight">
              <i className="fas fa-user-friends highlight-icon"></i>
              <p className="highlight-text">Represented Medstars Ltd at VentureFest WM 2018</p>
            </div>
          </div>
          <div className="info-skills">
            <h3>Skills</h3>
            <PercentageBar label="React JS" percentage={80} colour="#61DBFB" url="https://reactjs.org/" />
            <PercentageBar label="JavaScript" percentage={85} colour="#F7E018" url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
            <PercentageBar label="HTML 5" percentage={80} colour="#F16529" url="https://developer.mozilla.org/en-US/docs/Web/HTML" />
            <PercentageBar label="CSS 3" percentage={90} colour="#1572B7" url="https://developer.mozilla.org/en-US/docs/Web/CSS" />
            <PercentageBar label="SASS/SCSS" percentage={95} colour="#CE679A" url="https://sass-lang.com/" />
            <PercentageBar label="Git" percentage={70} colour="#F05033" url="https://git-scm.com/" />
            <PercentageBar label="Asana" percentage={80} colour="#F9726D" url="https://asana.com/" />
            <PercentageBar label="UI Frameworks" percentage={70} colour="#5D3F87" url="https://getbootstrap.com/" />
            <PercentageBar label="Figma" percentage={75} colour="#0ACF83" url="https://www.figma.com/" />
          </div>
        </div>
      </div>
    );
  }
}
export default Highlights;
