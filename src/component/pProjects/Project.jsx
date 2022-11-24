import React from 'react'
import './Project.scss'
import excel from '../../assets/templateImg/project/excel_project.png'
import studio from '../../assets/templateImg/project/studio_project.png'
const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Projects</h5>
      <h2>Projects</h2>
      <div className="container project_container">
        <div className="project_item">
          <div className="project_image"><img src={excel} alt="" /></div>
          <h3>MsExcel/Google Sheets Clone</h3>
          <ul className="project_dis">
            <li>This implementation of the excel sheet demonstrates my understanding of core Javascript concepts.</li>
            <li>Clean and easy-to-understand user interface similar to google sheets.</li>
            <li>The logic of the excel sheet is written using functional programming.</li>
            <li>All the major functionalities are implemented such as calculating sum, average, and formula bar.</li>
            <li>Directed Graph Algorithm is added for Cycle Detection in formula calculation.</li>
          </ul>
          <div className="project_cta">
            <a href="https://github.com/sachinkumar1469/excel-clone" className='btn' target='_blank'>GitHub</a>
            <a href="https://sanexcel.cf/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </div>
        <div className="project_item">
          <div className="project_image"><img src={studio} alt="" /></div>
          <h3>Music Player</h3>
          <ul className="project_dis">
            <li>A music player web application with scalable infrastructure and responsiveness.</li>
            <li>Technologies used: HTML, CSS, BootStrap, Tailwind CSS and Vanilla JavaScript.</li>
            <li>Supports various music formats including .mp3, WMA, WAV, etc.</li>
            <li>Interactive GUI.</li>
            <li>It consists of all the features like pause, play, track bar, etc.</li>
          </ul>
          <div className="project_cta">
            <a href="https://github.com/sachinkumar1469/music-player/" className='btn' target='_blank'>GitHub</a>
            <a href="https://sanstudio.cf/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Project
