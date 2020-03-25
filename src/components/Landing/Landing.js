import React from 'react'
import './Landing.css'
import Greeting from '../Greeting/Greeting'
import greetingData from '../../utils/greetingData'
import bioPageData from '../../utils/bioData'
import BioSection from '../BioSection/BioSection'
import ProjectSection from '../ProjectSection/ProjectSection'
import projectPageData from '../../utils/projectsData'

function Landing({bioRef, projRef}) {
  return (
    <main className="main-container">
      <Greeting {...greetingData}></Greeting>
      <BioSection bioPageData={bioPageData} areaRef={bioRef}></BioSection>
      <ProjectSection projectPageData={projectPageData} areaRef={projRef}></ProjectSection>
    </main>
  )
}

export default Landing
