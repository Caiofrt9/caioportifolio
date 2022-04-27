import React from "react";
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import me from '../../img/user.jpg'


const About = () => {
  return (
    <section id="about">
      <h5>Me conheça melhor </h5>
      <h2>Sobre mim</h2>

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
              <h5>Experência</h5>
              <small> 8 meses de desenvolvimento</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clientes</h5>
              <small> 2 CLientes</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Problemas</h5>
              <small> 100+ Problemas solucionados</small>
            </article>
          </div>

          <p>
          Sou desenvolvedor web há 8 meses, com experiência na criação de aplicativos responsivos e inteligentes. Estou sempre em busca de atualizações, especializações, novidades e desafios na área de tecnologia :)
          </p>

          <a href="#contact" className="btn btn-primary">Fale comigo</a>

        </div> 
      </div>

      </section>
  )
}

export default About