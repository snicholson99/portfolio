import Avatar from "../../components/Avatar";
import "./style.css";

export const AboutMe = () => {
  return (
    <div id="about-me" className="page">
      <div id="about-me-content">
        <p className="about-me-body">
          A self-motivated web developer, capable of working as part of a team
          or autonomously.
        </p>
        <p className="about-me-body">
          Shortlisted for both Graduate Developer of the Year at Silicon Canal
          Tech Awards 2018 and Developer of the Year 2019.
        </p>
        <p className="about-me-body">
          Graduated the first ever{" "}
          <a
            className="mid-text-link"
            href="https://schoolofcode.co.uk"
            target="_blank"
            rel="noreferrer"
          >
            School of Code bootcamp
          </a>{" "}
          aged 18.
        </p>
        <p className="about-me-body">Mentor to 3 School of Code graduates.</p>
        <p className="about-me-body">
          Outside of work, I'm an avid boulderer, sailor,{" "}
          <a
            className="mid-text-link"
            href="https://instagram.com/scott_n99"
            target="_blank"
            rel="noreferrer"
          >
            photographer
          </a>{" "}
          and{" "}
          <a
            className="mid-text-link"
            href="https://instagram.com/scott_playsguitar"
            target="_blank"
            rel="noreferrer"
          >
            guitarist.
          </a>
        </p>
      </div>
      <div id="about-me-media">
        <Avatar />
      </div>
    </div>
  );
};
