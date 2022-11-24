import React from 'react'
import './app.scss'

import About from './component/about/About.jsx'
import Contact from './component/contact/Contact.jsx'
import Experience from './component/experience/Experience.jsx'
import Skills from './component/skills/Skills.jsx'
import Project from './component/pProjects/Project'
import Achievements from './component/achievements/Achievements'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import Nav from './component/nav/Nav'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Skills/>
      <Experience/>
      <Project/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
