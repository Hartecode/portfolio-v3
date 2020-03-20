import React from 'react'
import './BioSection.css'
import SkillList from '../SkillList/SkillList'
import Section from '../Section/Section';


const BioSection = ({bioPageData, areaRef}) => {
  return (
    <Section title={bioPageData.pageName} ref={areaRef}>
      <div className="about-me">
        <div className="profile-dec">
          <img
              className="profile-img"
              src={bioPageData.image.src}
              alt={bioPageData.image.alt} />
            <p>{bioPageData.description}</p>
            <p>Have a cool project?
              <a href={`mailto:${bioPageData.contactEmail}`}
                rel="noopener"
                aria-label="Sean Harte's email">Let me know! 
                <i className="fas fa-envelope"></i>
              </a>
            </p>
        </div>  

        <div className="my-skills">
            {
              bioPageData.skills.map(({label, skills}) => (
                <div key={label} className="skillblock">
                  <div className="skillcategory">
                    <strong>{label}:</strong> 
                  </div>
                  <SkillList list={skills}></SkillList>
                </div>
              ))
            }
        </div>

      </div>
    </Section>
  );
}

export default BioSection
