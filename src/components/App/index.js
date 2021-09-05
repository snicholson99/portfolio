import React from 'react';

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
    <Highlights />
    <MyJourney />
    <GetInTouch />
  </div>
);

export default App;
