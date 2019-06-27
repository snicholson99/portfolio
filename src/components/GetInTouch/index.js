import React from 'react';

const GetInTouch = ({ isVisible }) => {
  return (
    <div id="get-in-touch" className={`git ${isVisible ? "visible" : "invisible"}`}>
      {/* <h1>Get In Touch</h1> */}

      <div className="git-content">
        <div className="social">

          <ul className="column">
            <li><a href="https://uk.linkedin.com/in/scott-nicholson" target="_blank" rel="noopener noreferrer">
              <i className="icon fab fa-linkedin" />
              <p className="label">LinkedIn</p>
            </a></li>
            <li><a href="https://www.instagram.com/scott_n99/" target="_blank" rel="noopener noreferrer">
              <i className="icon fab fa-instagram" />
              <p className="label">Instagram</p>
            </a></li>
          </ul>
          {/* <ul className="column">
            <li><a href="https://medium.com/@scott.nicholson" target="_blank" rel="noopener noreferrer">
              <i className="icon fab fa-medium" />
              <p className="label">Medium</p>
            </a></li>
            <li><a href="/curriculum_vitae.docx" target="_blank">
              <i className="icon fas fa-file-download" />
              <p className="label">Curriculum Vitae</p>
            </a></li>
          </ul> */}

          {/* <i className="fab fa-github" /> */}

        </div>
      </div>
      
    </div>
  );
}

export default GetInTouch;
