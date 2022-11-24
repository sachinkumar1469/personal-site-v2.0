import React from 'react'
import cv from '../../assets/Sachin_Kumar_Resume.pdf'
const Cta = () => {
  return (
    <div className='cta'>
      <a href={cv} download className='btn btn-primary'>Download CV</a>
      <a href="#contact" className='btn'>Let's Talk</a>
    </div>
  )
}

export default Cta
