import React from "react";
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import me from '../../img/img.png'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
      <div className="about__me">
            <div className="about__me-img">
              <img src={me}></img>
            </div>
          </div>


       <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small> 6 Months Develping</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small> 2 Clients In</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small> 20+ Completed</small>
            </article>
          </div>

          <p>I am a web developer for 6 months, with experience in creating responsive and intelligent applications.
          I'm always looking for updates, specializations, news and challenges in the technology area.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div> 
      </div>

      </section>
  )
}

export default About