import React from "react";
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container" >
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Design.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>App Design.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Graphic Design.</p>
            </li>


            <li>
              <BiCheck className='service__list-icon'/>
              <p>Logo and Brand Identity Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design development consulting.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information architecture.</p>
            </li>

            
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Development </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating features </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creative Problem Solving.</p>
            </li>


            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ongoing Website Maintenance.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Search Engine Optimization (SEO).</p>
            </li>

            
          </ul>
        </article>

        {/* END OF WEB DEVELOPEMENT */}

        
      </div>
    </section>
  )
}

export default Services