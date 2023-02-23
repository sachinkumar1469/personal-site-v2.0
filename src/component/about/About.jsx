import React from 'react'
import './about.scss'
import sachinkr from '../../assets/templateImg/sachin_kr.jpg'
import {MdComputer} from 'react-icons/md'
import {SiJava} from 'react-icons/si'
const About = () => {
  return (
    <section id="about" className='about_section'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="left">
          <div className="about__me">
            <div className="about__me__img">
              <img src={sachinkr} alt="sachin" />
            </div>
          </div>

        </div>
        <div className="right">
            <div className="card">
              <div className="highlights mern">
                <span className="icon"><MdComputer/></span>
                <span className="text">MERN Stack</span>
              </div>
              <div className="highlights java">
                <span className="icon"><SiJava/></span>
                <span className="text">Java</span>
              </div>
            </div> 
            <p>HELLO! Nice to meet you, I am Sachin Kumar, an undergraduate Computer Science student from India, currently studying in Greater Noida. I am a Full Stack Web Developer using MERN/MEAN stack, and Android Developer getting on cross-platform development using React Native. I also like to experiment with UI/UX. I like to work in a fast-paced environment where I can have the opportunity to learn many things at once.</p>
            <div className='atag'>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

            </div>

        </div>
      </div>
    </section>
  )
}

export default About
