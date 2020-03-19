import React from 'react';
import './Landing.css';
import Greeting from '../Greeting/Greeting';
import greetingData from '../../utils/greetingData';


function Landing() {
  return (
    <main>
      <Greeting {...greetingData}></Greeting>
      <section></section>
      <section></section>
    </main>
  );
}

export default Landing;
