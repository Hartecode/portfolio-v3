import React from 'react'
import './ProjectSection.css'
import SkillList from '../SkillList/SkillList'
import Section from '../Section/Section';
import Image from '../Image/Image';


const ProjectSection = ({projectPageData, areaRef}) => {

  const demoBtn = (website, name) => {
    if (website) {
      return (
        <a className="btn"
          href={website}
          aria-label={name}
          rel="noopener noreferrer"
          target="_blank">
          Demo
        </a>
      )
    } else {
      return (
        <button className="disabled-btn" disabled>
          Not Maintained
        </button>
      )
    }
  }
  return (
    <Section title={projectPageData.pageName} ref={areaRef}>
      {
        projectPageData.projects.map((
          {name, image, github, website, skills, description}) => (
          <div key={name} className="project-temp">
            <h3>{name}</h3>
            <div className="project-img">
              <Image
                
                src={image.src}
                alt={image.alt}>
              </Image>
            </div>
            
            <nav className="project-btns">
              <a className="btn" href={github} aria-label={`${name} github`} rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
              {
                demoBtn(website, name)
              }
            </nav>
          
            <SkillList list={skills}></SkillList>
            <p>{description}</p>
        </div>
        ))
      }
    </Section>
  );
}

export default ProjectSection
