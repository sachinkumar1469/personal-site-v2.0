import React from 'react'
import './Project.scss'
import excel from '../../assets/templateImg/project/excel_project.png'
import studio from '../../assets/templateImg/project/studio_project.png'
import yt from '../../assets/templateImg/project/youtube_project.png'
import textit from '../../assets/templateImg/project/textit.png';
import sansocial from '../../assets/templateImg/project/san_social.png';
import yourvisit from "../../assets/templateImg/project/your_visit.png";
const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Projects</h5>
      <h2>Projects</h2>
      <div className="container project_container">

        <div className="project_item">
          <div className="project_image"><img src={yourvisit} alt="" /></div>
          <h3>Your-Visit</h3>
          <ul className="project_dis">
            <li>Your-Visit is a social media application where users can post images with live locations of any place.</li>
            <li>Google Map API is used for location sharing.</li>
            <li>MongoDB Atlas is used as the database server.</li>
            <li>Rest APIs are built using ExpressJs and NodeJs.</li>
            <li>JWT package is used for authentication, BcryptJs for password Hashing, and Multer for File Upload.</li>
            <li>JWT package is used for authentication, BcryptJs for password Hashing, and Multer for File Upload.</li>
            <li>ReactJs library is used to build the front end.</li>
            <li>Custom Hooks and in-built react Hooks are used like useState, useEffect, useRef, useReducer, etc.</li>
          </ul>
          <div className="project_cta">
            <a href="https://github.com/sachinkumar1469/mern-stack-social-media-application" className='btn' target='_blank'>GitHub</a>
            <a href="https://github.com/sachinkumar1469/mern-stack-social-media-application" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </div>

        <div className="project_item">
          <div className="project_image"><img src={sansocial} alt="" /></div>
          <h3>SanSocial</h3>
          <ul className="project_dis">
            <li>This social media app is a web-based platform designed for social and interactive engagement.</li>
            <li>The app allows users to sign up and sign in using either their email and password or Google account.</li>
            <li>Once logged in, users can create posts similar to Twitter, as well as like and comment on other users' posts.</li>
            <li>Users can view the profiles of other users and add them as friends to expand their social network.</li>
            <li>The app includes a one-to-one chat feature for private, real-time conversations between users.</li>
            <li>The app is built using Node.js, MongoDB, jQuery, AJAX, and EJS technologies to provide a seamless and intuitive user experience.</li>
          </ul>
          <div className="project_cta">
            <a href="https://github.com/sachinkumar1469/sansocial-nodejs-social-media-web-app" className='btn' target='_blank'>GitHub</a>
            <a href="https://github.com/sachinkumar1469/sansocial-nodejs-social-media-web-app" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </div>

        <div className="project_item">
          <div className="project_image"><img src={textit} alt="" /></div>
          <h3>Text-It</h3>
          <ul className="project_dis">
            <li>Real-Time chat application.</li>
            <li>Messaging application which is built using ReactJs.</li>
            <li>Uses Firebase Firestore as NoSQL Database.</li>
            <li>Authentication using Firebase email and password Auth.</li>
            <li>Firebase Storage is used for image sharing.</li>
            <li>•Context API and useReducer are used for global State Management.</li>
            <li>The phone number is used as a unique username.</li>
          </ul>
          <div className="project_cta">
            <a href="https://github.com/sachinkumar1469/text-it" className='btn' target='_blank'>GitHub</a>
            <a href="https://textit.cf/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </div>

        <div className="project_item">
          <div className="project_image"><img src={yt} alt="" /></div>
          <h3>Youtube Clone Using ReactJs</h3>
          <ul className="project_dis">
            <li>Fully functional clone of Youtube Web using ReactJs and RapidAPI.</li>
            <li>It's a Single Page Application.</li>
            <li>Used various features of ReactJs like createContext, useState, useEffect, useContext and BrowserRouter.</li>
            <li>In this project RapidAPI is used to fetched the data from YouTube servers.</li>
            <li>Technologies used: JSX, ReactJs and TailwindCSS.</li>
          </ul>
          <div className="project_cta">
            <a href="https://github.com/sachinkumar1469/youtube-clone-using-react" className='btn' target='_blank'>GitHub</a>
            <a href="https://sanyoutube.cf/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </div>

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
