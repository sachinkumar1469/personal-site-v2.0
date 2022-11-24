import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href='#contact' target="__blank" className='linkedin'><BsLinkedin/></a>
      <a href='#contact' target="__blank" className='github'><BsGithub/></a>     
    </div>
  )
}

export default HeaderSocial
