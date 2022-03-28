import React from 'react'
import './portifolio.css'

import img from '../../img/projeto1.png'
import img2 from '../../img/projeto2.png'
import img3 from '../../img/projeto3.png'
// s

const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>My Recent Work</h5>
      <h2>Portfolioo</h2>

    <div className='container portifolio__container'>

      <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src={img3} alt=""></img>  
          </div>
          <h3>Deliciouuss</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Caiofrt9/deliciouuss' className='btn' target="_blank" rel="noreferrer">Github</a>
          <a href='https://astonishing-kitsune-18b50c.netlify.app' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article> 
 

        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src={img2} alt=""></img>  
          </div>
          <h3>Expense Tracker</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Caiofrt9/expense-tracker' className='btn' target="_blank" rel="noreferrer">Github</a>
          <a href='https://expense-tracker-git-main-caiofrt9.vercel.app' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>  

        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src={img} alt=""></img>  
          </div>
          <h3>Christimas Website</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Caiofrt9/ChristmasWebsite' className='btn' target="_blank" rel="noreferrer">Github</a>
          <a href='https://caiofrt9.github.io/ChristmasWebsite/' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>   
        

        {/* <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src={img}></img>  
          </div>
          <h3>This is a portifolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target="_blank">Github</a>
          <a href='https://github.com' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>   */}
      </div>
    </section>
  )
}

export default Portifolio