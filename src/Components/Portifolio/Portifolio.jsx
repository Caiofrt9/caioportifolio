import React, {useState} from "react";
import './portifolio.css'
import ViewMore from "./ViewMoreButtun";
import { projects } from "../../constants/projects";
import Modal from './Modal'


import { Pagination, Scrollbar} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import avatar2 from "../../../src/img/project.jfif"


const Portifolio = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }
  return (
    <section id='portifolio'>
      <h5>Review from Clients</h5>
      <h2>Projects</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[ Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={2}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
        {projects.map(project => (

        <SwiperSlide className="portfolio__card">
          <img className="portifolio__img" src={project.image}/>
          

          <div className="portfolio__card-btn">
          <ViewMore openModal={openModal} />
          <Modal showModal={showModal} setShowModal={setShowModal} project={project}/>
          </div>

        </SwiperSlide>
        ))}

       
      </Swiper>
    </section>
  )
}

export default Portifolio



