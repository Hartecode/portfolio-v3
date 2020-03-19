import React from 'react'
import './SkillList.css'
import Skill from '../Skill/Skill';



const SkillList = ({list}) => (
  <ul className="skillList">
    {list.map(val => <Skill name={val}></Skill>)}
  </ul>
);

export default SkillList