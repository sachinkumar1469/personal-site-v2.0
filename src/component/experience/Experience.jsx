import React from 'react'
import './Experience.scss'
import {BiCheck} from 'react-icons/bi'
const Experience = () => {
  return (
    <section id="experience">
      <h5>Where I worked in the past</h5>
      <h2>Experience</h2>
      <div className="container exp_container">
        <div className="exp_wrapper">
          <div className="exp_head">
            <h3>Web Developer</h3>
            <h4>At WebSolGuru</h4>
          </div>
          <ul className="exp_dis">
            <li>
              <BiCheck className='exp_dis_icon'/>
              <p>Created user interfaces using HTML5, CSS3, and modern JavaScript frameworks.</p>
            </li>
            <li>
              <BiCheck className='exp_dis_icon'/>
              <p>Analyzed requirements and designed, developed, and implemented gym website for client.</p>
            </li>
            <li>
              <BiCheck className='exp_dis_icon'/>
              <p>Assisted in the creation of various features in portfolio website.</p>
            </li>
          </ul>
        </div>
        <div className="exp_wrapper">
          <div className="exp_head">
            <h3>Web Developer</h3>
            <h4>At WebSolGuru</h4>
          </div>
          <ul className="exp_dis">
            <li>
              <BiCheck className='exp_dis_icon'/>
              <p>Created user interfaces using HTML5, CSS3, and modern JavaScript frameworks.</p>
            </li>
            <li>
              <BiCheck className='exp_dis_icon'/>
              <p>Analyzed requirements and designed, developed, and implemented gym website for client.</p>
            </li>
            <li>
              <BiCheck className='exp_dis_icon'/>
              <p>Assisted in the creation of various features in portfolio website.</p>
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  )
}

export default Experience
