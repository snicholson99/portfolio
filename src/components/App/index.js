import React from 'react';
import TrackVisibility from 'react-on-screen';

import './style.css';
import Navbar from '../page-components/Navbar';

import Landing from '../Landing';
import Highlights from '../Highlights';
import MyJourney from '../MyJourney';
import BehindTheCode from '../BehindTheCode';
import GetInTouch from '../GetInTouch';

const App = () => (
  <div className="app">
    <Navbar />
    <Landing />
    <TrackVisibility><Highlights /></TrackVisibility>
    <MyJourney />
    <BehindTheCode />
    <TrackVisibility><GetInTouch /></TrackVisibility>
  </div>
);

export default App;
