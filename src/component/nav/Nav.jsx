import React from 'react'
import './Nav.scss'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineSetting} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdOutlineSchool} from 'react-icons/md'
import {BiBook} from 'react-icons/bi'

import { useState,useEffect } from 'react'
const Nav = () => {
  const [active,setActive] = useState('#');
  useEffect(()=>{

  },[])
  return (
    <nav>
      <a href="#" onClick={()=>{setActive("#")}} className={active === '#' && 'active'}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>{setActive('#about')}} className={active === '#about' && 'active'}><AiOutlineUser/></a>
      <a href="#skills" onClick={()=>{setActive('#skills')}} className={active === '#skills' && 'active'}><AiOutlineSetting/></a>
      <a href="#experience" onClick={()=>{setActive('#experience')}} className={active === '#experience' && 'active'}><AiOutlineFundProjectionScreen/></a>
      <a href="#project" onClick={()=>{setActive('#project')}} className={active === '#project' && 'active'}><BiBook/></a>
      <a href="#education" onClick={()=>{setActive('#education')}} className={active === '#education' && 'active'}><MdOutlineSchool/></a>
    </nav>
  )
}

export default Nav
