import React from 'react'
import './ProjectSection.css'
import SkillList from '../SkillList/SkillList'
import Section from '../Section/Section';


const ProjectSection = ({projectPageData, areaRef}) => {
  return (
    <Section title={projectPageData.pageName} ref={areaRef}>
      {
        projectPageData.projects.map((
          {name, image, github, website, skills, description}) => (
          <div key={name} className="project-temp">
            <h3>{name}</h3>
            <img
              className="project-img"
              src={image.src}
              alt={image.alt} />
            <nav className="project-btns">
              <a className="btn" href={github} aria-label={`${name} github`} rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
              <a className="btn" href={website} aria-label={name} rel="noopener noreferrer" target="_blank">
                Demo
              </a>
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
