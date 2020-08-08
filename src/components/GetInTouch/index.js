import React from 'react';

const GetInTouch = ({ isVisible }) => {
  return (
    <div id="get-in-touch" className={`git ${isVisible ? "visible" : "invisible"}`}>
      {/* <h1>Get In Touch</h1> */}

      <div className="git-content">
        <div className="social">

          <ul className="column">
            <li><a href="https://github.com/snicholson99" target="_blank" rel="noopener noreferrer">
              <i className="icon fab fa-github" />
              <p className="label">Github</p>
            </a></li>
            <li><a href="https://uk.linkedin.com/in/scott-nicholson" target="_blank" rel="noopener noreferrer">
              <i className="icon fab fa-linkedin" />
              <p className="label">LinkedIn</p>
            </a></li>
            <li><a href="https://www.instagram.com/scott_n99/" target="_blank" rel="noopener noreferrer">
              <i className="icon fab fa-instagram" />
              <p className="label">Instagram</p>
            </a></li>
            <li><a href="https://medium.com/@scott.nicholson" target="_blank" rel="noopener noreferrer">
              <i className="icon fab fa-medium" />
              <p className="label">Medium</p>
            </a></li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default GetInTouch;
