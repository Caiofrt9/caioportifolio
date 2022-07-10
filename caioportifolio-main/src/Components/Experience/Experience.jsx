import React from "react";
import './experience.css'
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience"> 
    <h5>Quais habilidades eu tenho</h5>
    <h2>Um pouco dos meus conhecimentos</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Desenvolvimento FrontEnd</h3>
        <div className="experience__content">
          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>HTML</h4>
          <small className="text-light">Avançado</small>
          </article>

          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>CSS</h4>
          <small className="text-light">Intermediário</small>
          </article>

          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>JavaScript</h4>
          <small className="text-light">Intermediário</small>
          </article>

          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>Bootstrap</h4>
          <small className="text-light">Básico</small>
          </article>

          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>TypeScript</h4>
          <small className="text-light">Básico</small>
          </article>

          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>ReactJS</h4>
          <small className="text-light">Intermediário</small>
          </article>
        </div>
      </div>

      { /*=======END OF FRONT END========*/ }

      <div className="experience__backend">
        <h3>Desenvolvimento BeckEnd</h3>
        <div className="experience__content">
          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>Node JS</h4>
          <small className="text-light">Básico</small>
          </article>

          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>Mongo DB</h4>
          <small className="text-light">Básico</small>
          </article>

          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>PHP</h4>
          <small className="text-light">Básico</small>
          </article>

          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>MySQL</h4>
          <small className="text-light">Básico</small>
          </article>
          
          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>Python</h4>
          <small className="text-light">Básico</small>
          </article>

         
        </div>
      </div>

    </div>
    </section>
  )
}

export default Experience