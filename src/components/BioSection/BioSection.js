import React from 'react'
import './BioSection.css'
import SkillList from '../SkillList/SkillList'
import Section from '../Section/Section'
import Image from '../Image/Image'


const BioSection = ({bioPageData, areaRef}) => {
  return (
    <Section title={bioPageData.pageName} ref={areaRef}>
      <div className="about-me">
        <div className="profile-dec">
          <div className="profile-img">
            <Image
              round
              src={bioPageData.image.src}
              alt={bioPageData.image.alt}>
            </Image>
          </div>
          <p>{bioPageData.description}</p>
          <p>Want to work with me?
            <a className="let-me-know" href={`mailto:${bioPageData.contactEmail}`}
              rel="noopener"
              aria-label="Sean Harte's email">Let me know! 
              <i className="fas fa-envelope"></i>
            </a>
          </p>
        </div>  

        <div className="my-skills">
            {
              bioPageData.skills.map(({label, skills}) => (
                <div key={label} className="skill-block">
                  <div className="skill-category">
                    <strong>{label}:</strong> 
                  </div>
                  <SkillList list={skills}></SkillList>
                </div>
              ))
            }
        </div>

      </div>
    </Section>
  )
}

export default BioSection
