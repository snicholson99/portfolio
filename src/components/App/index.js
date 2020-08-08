import React from 'react';
import TrackVisibility from 'react-on-screen';

import './style.css';
import Navbar from '../page-components/Navbar';

import Landing from '../Landing';
import Highlights from '../Highlights';
import MyJourney from '../MyJourney';
import GetInTouch from '../GetInTouch';

const App = () => (
  <div className="app">
    <Navbar />
    <Landing />
    <TrackVisibility once><Highlights /></TrackVisibility>
    <TrackVisibility once><MyJourney /></TrackVisibility>
    <TrackVisibility once><GetInTouch /></TrackVisibility>
  </div>
);

export default App;
