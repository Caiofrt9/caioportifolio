import React from "react";
import './portifolio.css'
import ViewMore from "./ViewMoreButtun";


import { Pagination, Scrollbar} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import avatar2 from "../../../src/img/project.jfif"


const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>Review from Clients</h5>
      <h2>Projects</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[ Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="portfolio__item">
          <div className="portifolio__item-image">
          <img className="avatar" src={avatar2}/>
          </div>

          <div className="portfolio__item-cta">
          <ViewMore />
          </div>

        </SwiperSlide>

        <SwiperSlide className="portfolio__item">
          <div className="portifolio__item-image">
          <img className="avatar" src={avatar2}/>
          </div>

          <ViewMore />
        </SwiperSlide>

        <SwiperSlide className="portfolio__item">
          <div className="portifolio__item-image">
          <img className="avatar" src={avatar2}/>
          </div>

          <ViewMore />

        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Portifolio



