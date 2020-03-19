import React from 'react'
import './Landing.css'
import Greeting from '../Greeting/Greeting'
import greetingData from '../../utils/greetingData'
import bioPageData from '../../utils/bioData'
import BioSection from '../BioSection/BioSection'


function Landing({bioRef}) {
  return (
    <main className="main-container">
      <Greeting {...greetingData}></Greeting>
      <BioSection bioPageData={bioPageData} areaRef={bioRef}></BioSection>
      <section></section>
    </main>
  );
}

export default Landing
