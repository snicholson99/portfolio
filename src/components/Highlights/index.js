import React, { Component } from 'react';
import data from './data';

class Highlights extends Component {

  componentDidMount() {
    const video = document.getElementById("background-video");
    video.playbackRate = 0.8;
  }
  render() {
    return (
      <div id="highlights" className="info">
        <video id="background-video" autoPlay muted loop className="background-video">
          <source src="blurred_coding.mp4" type="video/mp4" />
        </video>
        <div className="visible">
          <div className="info-highlights">
            <h3>Career Highlights</h3>
            <div className="highlight">
              <i className="fas fa-award highlight-icon"></i>
              <p className="highlight-text">Shortlisted for Developer & Graduate Developer of the Year (Silicon Canal Tech Awards 2019 and 2018 respectively)</p>
            </div>
            <div className="highlight">
              <i className="fas fa-users highlight-icon"></i>
              <p className="highlight-text">Managed and presented a team project to an audience of 100+ employers, created within 4 weeks</p>
            </div>
            <div className="highlight">
              <i className="fas fa-user-friends highlight-icon"></i>
              <p className="highlight-text">Mentor to two School of Code bootcampers</p>
            </div>
            {/* <div className="highlight">
              <i className="fas fa-user-friends highlight-icon"></i>
              <p className="highlight-text">Represented Medstars Ltd at VentureFest WM 2018</p>
            </div> */}
          </div>
          <div className="info-skills">
            {data.proficient.length > 0 && <h3>Proficient with</h3>}
            {data.proficient.map(chip => chip.name && (
              <a key={chip.name} className="chip" href={chip.url} target={chip.openInNewTab && "_blank"}>
                <img src={chip.imageSrc} alt={chip.name} />
                <p>{chip.name}</p>
              </a>
            ))}
          </div>
          {/* <div className="info-skills">
            {data.learning.length > 0 && <h3>Actively learning</h3>}
            {data.learning.map(chip => chip.name && (
              <a key={chip.name} className="chip" href={chip.url} target={chip.openInNewTab && "_blank"}>
                <img src={chip.imageSrc} alt={chip.name} />
                <p>{chip.name}</p>
              </a>
            ))}
          </div> */}
        </div>
      </div>
    );
  }
}
export default Highlights;
