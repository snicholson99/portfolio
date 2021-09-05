import React, { Component } from 'react';
import '../../App/Stepper.css';

class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    }
  }

  onSlideSelect = selectedSlide => this.setState({ currentSlide: selectedSlide });

  render() {
    const { headings, icons, content } = this.props;
    const { currentSlide } = this.state;
    return (
      <div className="stepper">
        <div className="stepper-headings">
          {icons.map((icon, index) => (
            <img key={index} alt="stepper icon" onClick={() => this.onSlideSelect(index)} className={`icon ${currentSlide === index && "selected"}`} src={icon} />
          ))}
        </div>

        <div className="stepper-content">
          {headings.map((heading, index) => currentSlide === index && <h3 key={index}>{heading}</h3>)}
          {content.map((content, index) => currentSlide === index && <p key={index}>{content}</p>)}
        </div>
      </div>
    );
  }
}

export default Stepper;