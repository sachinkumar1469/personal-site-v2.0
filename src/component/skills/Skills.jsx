import React from 'react'
import './Skills.scss'
import skillsImage from '../../assets/templateImg/tech-icons.png'
import Skill from './Skill'

import {c,java,javascript,typescript,aws,gcloud,vc,mysql,mongodb,node,apache,reactLogo,angular,html,css,bootstrap,jquery,saas} from '../../assets/templateImg/skills_icons/skillIcon'


const Skills = () => {
  return (
    <section id="skills">
      <h5>The Skills I have</h5>
      <h2>Skills</h2>
      <div className="container skills_container">
        <div className="left">
          <div className="image">
            <img src={skillsImage} alt="" />
          </div>
        </div>
        <div className="right">
          <h4>Languages</h4>
          <div className="skills_cont">
            <Skill logo={c}/>
            <Skill logo={java}/>
            <Skill logo={javascript}/>
            <Skill logo={typescript}/>
          </div>
          <h4>Frameworks</h4>
          <div className="skills_cont">
            <Skill logo={reactLogo}/>
            <Skill logo={angular}/>
          </div>
          <h4>Frontend</h4>
          <div className="skills_cont">
            <Skill logo={html}/>
            <Skill logo={css}/>
            <Skill logo={bootstrap}/>
            <Skill logo={jquery}/>
            <Skill logo={saas}/>
          </div>
          <h4>Backend</h4>
          <div className="skills_cont">
            <Skill logo={node}/>
            <Skill logo={apache}/>   
          </div>
          <h4>Database</h4>
          <div className="skills_cont">
            <Skill logo={mysql}/>
            <Skill logo={mongodb}/>   
          </div>
          <h4>Cloud</h4>
          <div className="skills_cont">
            <Skill logo={aws}/>
            <Skill logo={gcloud}/>   
          </div>
          <h4>VCS</h4>
          <div className="skills_cont">
            <Skill logo={vc}/>   
          </div>
          
          
        </div>
      </div>
    </section>
  )
}

export default Skills
