import React from 'react'
import Cta from './Cta'
import './Header.scss'
import HeaderSocial from './HeaderSocial'
// import myImg from '../../sachin_kumar-bg-relight.png';
import myImg from '../../profile_picture1.jpg';
import {BsArrowRightShort} from 'react-icons/bs';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sachin Kumar</h1>
        <h5 className='text-light'>Full-Stack Developer</h5>
        <Cta/>
        <HeaderSocial/>
        <div className="image-rectangle">
          <img src={myImg} alt="profile" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down <BsArrowRightShort/></a>
      </div>
      
    </header>
  )
}

export default Header
