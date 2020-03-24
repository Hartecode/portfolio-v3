import React, {useState} from 'react'
import './ProjectSection.css'
import SkillList from '../SkillList/SkillList'
import Section from '../Section/Section';
import Image from '../Image/Image';


const ProjectSection = ({projectPageData, areaRef}) => {
  const projectList = projectPageData.projects
  const [showOnlyTopProj, setShowOnlyTopProj] = useState(true)

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

  const populateProjects = () => {
    const shortList = projectList.slice(0, 2);
    const displayList = showOnlyTopProj ? shortList : projectList
    return displayList.map((
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

  const showAllProj = () => {
    if (showOnlyTopProj && projectList.length > 2) {
      return (
        <button className="btn btnMaxWidth" onClick={() => setShowOnlyTopProj(false)}>
          Show Older Project{(projectList.length > 3) ? 's' : ''}
        </button>
        )
    }
    return null
  }

  return (
    <Section title={projectPageData.pageName} ref={areaRef}>
      {
       populateProjects()
      }
      {
        showAllProj()
      }
    </Section>
  );
}

export default ProjectSection
