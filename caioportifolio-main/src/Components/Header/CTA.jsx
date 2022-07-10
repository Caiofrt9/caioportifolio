import React from "react";
import CV from '../../img/Caio.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Baixar CV</a>
      <a href="#contact" className="btn btn-primary">Fale comigo</a>
    </div>
  )
}
export default CTA